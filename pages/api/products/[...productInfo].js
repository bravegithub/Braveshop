import executeQuery from '../../Config/db1';

export default async function handler(req,res){
  try {
    const results = await executeQuery(' SELECT * FROM product where product.id = ?',[req.query.productInfo])
    const data = results[0];
    res.status(200).json({data})
  } catch (error) {
    console.log(error)
  }
   
}