import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stock',
  connectionLimit: 50, 
});

const executeQuery = async (query, params) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(query, params);
    return rows;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'exécution de la requête :', error);
    
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

export default executeQuery;