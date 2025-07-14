const mysql = require('pg');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_password',
  database: 'your_db',
});

module.exports = {
  query: (sql, params) => pool.execute(sql, params)
};

await db.query('INSERT INTO customers(name, email, phone) VALUES($1, $2, $3)', [name, email, phone])

