const mysql = require('mysql')
const { dbconfig } = require('./dbconfig')

const db = mysql.createConnection(dbconfig) //tells where to connect to
db.connect() //connects

db.query('SELECT * FROM customers', (err, rows) => {
    if(err){
        console.error('Error from MySQL:', err)
    } else {
        console.log('Got back ROWS:', rows)
    }
})
db.end() //stops the connection