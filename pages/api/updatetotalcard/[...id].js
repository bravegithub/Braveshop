import executeQuery from '../../Config/db';

export default async function handler(req,res){
  try {
    const results = await executeQuery('UPDATE cart SET cart.total= cart.unit_price * ?,cart.qte=? WHERE cart.id_product=?',[req.query.body,req.query.body,req.query.id])
    const data = results[0];
    res.status(200).json({data})
  } catch (error) {
    console.log(error)
  }
   
}