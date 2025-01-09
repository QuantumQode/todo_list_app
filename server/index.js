const express = require('express');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QuantumXena1',
    database: 'todo-list'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    // Create users table if it doesn't exist
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            userName VARCHAR(255) NOT NULL,
            userPassword VARCHAR(255) NOT NULL
        )
    `;
    db.query(createUsersTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating users table:', err);
            return;
        }
        console.log('Users table created or already exists');
    });
});

app.get('/select', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/insert', (req, res) => {
    db.query('INSERT INTO users (userName, userPassword) VALUES ("admin", "admin")', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Values inserted');
        }
    });
});


app.listen(3001, () => {
  console.log('server is running on port 3001');
});
