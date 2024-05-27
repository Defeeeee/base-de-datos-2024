const mysql = require('mysql2/promise')
require('dotenv').config()

const pool = mysql.createPool({
    host: "germand.tplinkdns.com",
    user: "sergio",
    password: process.env.PASS,
    database: "tp2",
})

async function run() {
    const conn = await pool.getConnection();
    const arr = await conn.query('SELECT * FROM empleado')
    console.log(arr[0])
}

run()