import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME
})


database.connect((error) => {
    if (error) {
        console.log('there has been an error')
        console.log(error)
    } else {
        console.log("Database Connected Successfully")

        // Run this exactly once.
        // database.query('DROP DATABASE company;')

        database.query('CREATE DATABASE IF NOT EXISTS tufcode;');
        database.query('USE tufcode;');

        database.query(`
            CREATE TABLE IF NOT EXISTS problem
            (
                problem_id INT AUTO_INCREMENT PRIMARY KEY,
                problem_tag ENUM('Easy', 'Medium', 'Hard'),
                problem_description TEXT,
                example_testcases TEXT,
                example_result TEXT,
                submission_count INT DEFAULT 0,
                accepted_solution_count INT DEFAULT 0
            );
        `);

        database.query(`
            CREATE TABLE IF NOT EXISTS submission
            (
                submission_id INT AUTO_INCREMENT PRIMARY KEY,
                problem_id INT,
                username VARCHAR(50),
                submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                stdin TEXT,
                status ENUM('Accepted', 'Wrong', 'TLE', 'MLE'),
                programming_language VARCHAR(50),
                code TEXT,
                FOREIGN KEY (problem_id) REFERENCES problem(problem_id)
            );
        `)

        database.query(`
            SELECT 2 + 2 FROM DUAL
        ` , (error , result , fields) => {
            if(error){
                console.log(error)
            } else if (result) {
                console.log(result)
            } else if(fields) {
                console.log(fields)
            }
        })
    }
})

export default database;