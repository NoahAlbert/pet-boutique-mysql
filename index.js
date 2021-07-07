const mysql = require('mysql')
const { dbconfig } = require('./dbconfig')

const db = mysql.createConnection(dbconfig) //tells where to connect to
db.connect() //connects

const customer_name = 'Noah'

db.query(`SELECT * FROM customers LEFT JOIN pets ON customers.id = pets.customer_id WHERE first_name = '${customer_name}'`, (err, rows) => {
    if(err){
        console.error('Error from MySQL:', err)
    } else {
        console.log('Got back ROWS:', rows)
    }
})
db.end() //stops the connection