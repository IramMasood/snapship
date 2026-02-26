const sql = require('mssql');

const config = {
  user: 'iram',
  password: 'Went983#',
  server: 'snapship-server.database.windows.net',
  database: 'snapship',
  options: { encrypt: true, enableArithAbort: true }
};

async function getConnection() {
  try {
    let pool = await sql.connect(config);
    console.log("Connected to Azure SQL!");
    return pool;
  } catch (err) {
    console.error("Database Connection Error:", err);
  }
}

module.exports = { sql, getConnection };