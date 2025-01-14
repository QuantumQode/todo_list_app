//This file sets up an Express server that connects to a MySQL database and handles user registration requests.

// These const variables import the express, mysql, and cors libraries.
// The express library is used to create the server.
const express = require('express');
// The mysql library is used to connect to the MySQL database.
const mysql = require('mysql');
// app is a variable that contains the express function.
const app = express();
// The cors variable imports the cors library, which allows the server to accept requests from the client.
const cors = require('cors');

// The app.use() function tells the server to use the express.json() and cors() middleware.
app.use(express.json()); 
app.use(cors());


//create connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QuantumXena1',
    database: 'todo-list'
});

//connect to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    // Create a variable that contains the SQL to create users table if it doesn't exist
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            userName VARCHAR(255) NOT NULL,
            userPassword VARCHAR(255) NOT NULL
        )
    `;
    //create table
    db.query(createUsersTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating users table:', err);
            return;
        }
        console.log('Users table created or already exists');
    });
});

//create a post endpoint for user registration
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //insert user into database
    db.query(
        'INSERT INTO users (userName, userPassword) VALUES (?, ?)',
        [username, password],
        (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                res.status(500).send('Error inserting user');
            } else {
                res.status(200).send('User registered successfully');
            }
        }
    );
});



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
