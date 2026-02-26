const express = require('express');
const { getConnection } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM Orders');
  res.send(result.recordset);
});

app.listen(port, () => console.log(`Dashboard running on port ${port}`));