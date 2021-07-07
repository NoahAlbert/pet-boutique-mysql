//connect to mySQL
const mysql = require('mysql')
const { dbconfig } = require('./dbconfig')
const db = mysql.createConnection(dbconfig)
db.connect()

const pet = {
    name: 'Dragon',
    type: 'salamander',
    size: 'small'
}
const customerName = 'Noah'

//find a customer
//add pet to that customer
db.query(`INSERT INTO pets VALUES 
        (NULL,
        (SELECT id FROM customers WHERE first_name = '${customerName}'),
        '${pet.name}', '${pet.type}', '${pet.size}')`,
    (err, results) => {
        if(err){
            console.error(err)
        }
        console.log(results)
})

db.end()