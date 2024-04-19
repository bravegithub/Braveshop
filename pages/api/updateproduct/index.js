import multer from 'multer';
import fs from 'fs';
import path from 'path';
import executeQuery from '../../Config/db1';

const upload = multer({ dest: 'uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = upload.single('photo');
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
    return;
  }

  try {
    uploadMiddleware(req, res, async (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        res.status(500).json({ success: false, message: 'Error uploading file' });
        return;
      }

      const { id, category, name, description, quantity, price } = req.body;
      const photo = req.file;

      if (!photo || !photo.originalname || !photo.path) {
        res.status(400).json({ success: false, message: 'Photo file is required' });
        return;
      }

      const photoName = `${Date.now()}_${photo.originalname}`;
      const newPath = path.join(process.cwd(), 'public', 'Photos', photoName);

      try {
        fs.renameSync(photo.path, newPath);
      } catch (error) {
        console.error('Error moving photo:', error);
        res.status(500).json({ success: false, message: 'Error moving photo file' });
        return;
      }

      try {
        const total = quantity * price;
        let categoryId;

        if (category === 'Clothes') {
          categoryId = 1;
        } else if (category === 'Shoes') {
          categoryId = 2;
        } 
        const results = await executeQuery(
          'UPDATE product SET category_id = ?, n_product = ?, description = ?, photo = ?, a_stock = ?, unit_price = ?, total = ? WHERE id = ?',
          [categoryId, name, description, photoName, quantity, price, total, id]
        );

        if (results.affectedRows > 0) {
          res.status(200).json({ success: true, message: 'Product updated successfully' });
        } else {
          res.status(500).json({ success: false, message: 'Failed to update product' });
        }
      } catch (error) {
        console.error('Error updating product in database:', error);
        res.status(500).json({ success: false, message: 'Error updating product in database' });
      }
    });
  } catch (error) {
    console.error('Error handling update product request:', error);
    res.status(500).json({ success: false, message: 'Error handling update product request' });
  }
}
