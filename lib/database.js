const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'localhost',
    database: 'login',
    user: 'root',
    password: '@weSOME2468',
});

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('MySql DB connected succesfully');
    }
});

module.exports = connection;