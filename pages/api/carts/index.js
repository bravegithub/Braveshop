import executeQuery from '../../Config/db';

export default async function handler(req, res) {
  try {
    const carts = await executeQuery('SELECT * FROM cart');
    if(carts){
        res.status(200).json(carts);
    }
    else{
        res.status(200).json({success: false });
      }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' ,'error': error});
  }
}