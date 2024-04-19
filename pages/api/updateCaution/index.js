import executeQuery from '../../Config/db';

export default async function handler(req,res){
    const{total,id}=req.body;
    const results = await executeQuery('UPDATE auction SET unit_price=? WHERE id=?',[total,id]) ;
    console.log(results);
    if(results){
        res.status(200).json({ success: true, message: 'Données insérées avec succès dans la table cart.' });
    }
}