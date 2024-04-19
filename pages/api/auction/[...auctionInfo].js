import executeQuery from '../../Config/db';

export default async function handler(req,res){
  try {
    const results = await executeQuery(' SELECT * FROM auction WHERE auction.id = ?',[req.query.auctionInfo])
    const data = results[0];
    res.status(200).json({data})
  } catch (error) {
    console.log(error)
  }
   
}