import express from 'express';

const app = express();
const PORT=3000;

app.get('/', (req, res) => {
    res.status(200).send('Hola Mundooooooo!')
})
app.post('/post', (req, res)=>{
    res.status(201).send('hola post')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}
)