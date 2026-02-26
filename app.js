const express = require('express');
const { getConnection } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

console.log("Node.js app starting...");

// Root route
app.get('/', async (req, res) => {
  try {
    const pool = await getConnection();
    if (!pool) throw new Error("DB pool not available");
    const result = await pool.request().query('SELECT * FROM Orders');
    res.send(result.recordset);
  } catch (err) {
    console.error("SQL Error:", err);
    res.status(500).send("Database connection failed: " + err.message);
  }
});

// Start server
app.listen(port, () => console.log(`Dashboard running on port ${port}`));