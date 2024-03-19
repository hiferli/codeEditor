import express from 'express'
import dotenv from "dotenv";
import cors from 'cors'

import database from './DatabaseConnection.js';
import submissionRoutes from './Routes/SubmissionRoutes.js'
import problmenRoutes from './Routes/ProblemRoutes.js'

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())

// Test the successfull connection of the database
// app.get('/test', (request, response) => {
//     database.query(`
//         SELECT 2 + 2 FROM dual;
//     ` , (error , result , fields) => {
//         if(error) {
//             return response.status(502).json({
//                 'error': error
//             })
//         } else if(result) {
//             return response.status(201).json({
//                 'result': result
//             })
//         }
//     })
// })

app.use('/submissions' , submissionRoutes);
app.use('/problems' , problmenRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`TUF-Backend listening on port ${port}`)
})