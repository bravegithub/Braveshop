import executeQuery from '../../Config/db1';

export default async function handler(req,res){
  try {
    const results = await executeQuery(' SELECT * FROM sales')
    const data = results;
    res.status(200).json({data})
  } catch (error) {
    console.log(error)
  }
   
}