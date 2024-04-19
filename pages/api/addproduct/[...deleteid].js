import executeQuery from "@/pages/Config/db1";

export default async function handler(req,res){
    const result = executeQuery('DELETE FROM product WHERE product.id=?',[req.query.deleteid]);
    if(result){
        res.status(200).json({success:true})
    }
    else{
        res.status(200).json({success:false})
    }

}