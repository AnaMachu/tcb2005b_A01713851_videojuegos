const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'paw',
    password: '',
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
    } else {
        console.log('Conexión a BD exitosa');
        connection.release();
    }
});

module.exports = pool.promise();