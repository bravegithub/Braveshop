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

export default async function handler(req, res) {
  upload.single('photo')(req, res, async (err) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error uploading file' });
      return;
    }

    const { category, name, description, quantity, price } = req.body;
    const { filename, path: filePath } = req.file;

    if (!filename || !filePath) {
      res.status(400).json({ success: false, message: 'Photo file is required' });
      return;
    }

    const photoName = `${Date.now()}_${filename}`;
    const newPath = path.join(process.cwd(), 'public', 'Photos', photoName);

    try {
      fs.renameSync(filePath, newPath);
    } catch (error) {
      console.error('Error moving photo:', error);
      res.status(500).json({ success: false, message: 'Error moving photo file' });
      return;
    }

    try {
      const total = quantity * price;

      // Insérer le produit avec l'id de la catégorie dans la table product
      const results = await executeQuery(
        'INSERT INTO product (category_id, n_product, description, photo, a_stock, unit_price, total) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [category, name, description, photoName, quantity, price, total]
      );

      if (results.affectedRows > 0) {
        res.status(200).json({ success: true, message: 'Product added successfully' });
      } else {
        res.status(500).json({ success: false, message: 'Failed to add product' });
      }
    } catch (error) {
      console.error('Error adding product to database:', error);
      res.status(500).json({ success: false, message: 'Error adding product to database' });
    }
  });
}
