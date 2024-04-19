import executeQuery from '../../Config/db';

export default async function handler(req, res) {
  try {
    const products = await executeQuery('SELECT * FROM auction');
    if(products){
        res.status(200).json(products);
    }
    else{
        res.status(200).json({success: false });
      }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' ,'error': error});
  }
}