import executeQuery from '../../Config/db1';
export default async function handler(req,res){
    const { mail,password } = req.body;
    const results = await executeQuery('SELECT * FROM users WHERE email=? AND password=?', [mail,password]);
    if (results.length > 0) {
        console.log('results:', results);
        res.status(200).json(results);
    } else {
        res.status(200).json({ message: 'User not found' });
    }

}