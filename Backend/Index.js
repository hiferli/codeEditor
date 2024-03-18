import express from 'express'
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello World!')
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`TUF-Backend listening on port ${port}`)
})