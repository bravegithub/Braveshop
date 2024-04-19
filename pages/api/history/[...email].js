import executeQuery from '../../Config/db';

export default async function handler(req,res){
  try {
    const results = await executeQuery(' SELECT * FROM cart where cart.id_user = ?',[req.query.email])
    const data = results;
    res.status(200).json({data})
  } catch (error) {
    console.log(error)
  }
   
}