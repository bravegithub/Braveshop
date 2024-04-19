import executeQuery from '../../Config/db';

export default async function handler(req, res) {
  const { id } = req.query; 
  const { n_product, description, photo,a_stock,unit_price } = req.body; 

  try {
    const results = await executeQuery('UPDATE product SET n_product = ?, description = ?, photo = ?, id_category = ?, a_stock = ?, unit_price = ? WHERE product.id = ?', [n_product, description, photo,'1', a_stock,unit_price, id]);
    if (results) {
      res.status(200).json({ success: true, message: 'Data updated successfully in the product table.' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update data in the product table.' });
  }
}
