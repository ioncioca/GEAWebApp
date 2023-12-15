
const dotenv = require('dotenv')

dotenv.config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err: any) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

export default connection;
