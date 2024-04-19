import executeQuery from "@/pages/Config/db";

export default async function handler(req,res){
    const result = executeQuery('DELETE FROM cart WHERE cart.id_product=?',[req.query.id]);
    if(result){
        res.status(200).json({success:true})
    }
    else{
        res.status(200).json({success:false})
    }

}