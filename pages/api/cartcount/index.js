// import executeQuery from "@/pages/Config/db";

// export default async function handler(req, res) {
//   try {
//     const result = await executeQuery('SELECT COUNT(id_product) AS count FROM cart');
//     const cartCount = result[0].count || 0;
//     res.status(200).json({ count: cartCount });
//   } catch (error) {
//     console.error('Error fetching cart count:', error);
//     res.status(500).json({ error: 'Failed to fetch cart count' });
//   }
// }
