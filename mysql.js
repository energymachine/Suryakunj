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
