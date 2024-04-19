import executeQuery from '../../Config/db1';

export default async function handler(req, res) {
    const { category_id,id_product, n_product, unit_price, photo, total, qte } = req.body;

    await executeQuery('INSERT INTO sales (category_id,id_product, n_product, photo, unit_price, total, qte) VALUES (?, ?, ?, ?, ?, ?,?)', [category_id,id_product, n_product, photo, unit_price, total, qte]);

    const product = await executeQuery('SELECT unit_price, a_stock FROM product WHERE id = ?', [id_product]);
    if (product.length > 0) {
        const { unit_price, a_stock } = product[0];
        const newAStock = a_stock - qte;
        const newTotal = unit_price * newAStock;
        const updateProductResult = await executeQuery('UPDATE product SET a_stock = ?, total = ? WHERE id = ?', [newAStock, newTotal, id_product]);

        if (updateProductResult.affectedRows > 0) {
            res.status(200).json({ success: true, message: 'Données insérées avec succès dans la table cart et mise à jour de la table product.' });
        } else {
            res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour de la table product.' });
        }
    } else {
        res.status(404).json({ success: false, message: 'Produit non trouvé.' });
    }
}
