let mysql = require('mysql');

//local mysql db connection
let connection = mysql.createConnection({
    host: '139.99.114.236',
    user: 'kelaskita_crud_nodejs',
    password: 'kelaskita_crud_nodejs',
    database: 'kelaskita_crud_nodejs'
});

connection.connect((err) => {if (err) console.log("connection error")});

module.exports = connection;