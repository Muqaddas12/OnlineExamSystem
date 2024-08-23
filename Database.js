const mysql = require('mysql2');

// database setup for mysql database 
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root@123',
    database:'Faculty'
});


connection.connect((error)=>{
    if(error){
        console.log('database connection is not established',error);
    }
    else{
        console.log('database connection is established')
    }
});


module.exports = connection;