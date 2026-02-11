import express from 'express';
import { suma } from './suma.js'

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(500).send('Hola Mundooooooo!')
})
app.post('/suma', (req, res) => {
    console.log(req.body.numB)
    const numberA=req.body.numA;
    const numberB=req.body.numB;


    res.status(201).send(suma(numberA, numberB))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}
)