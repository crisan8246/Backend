const express = require('express')
const app = express()
const PORT = 8080 || process.env.PORT;


let date = new Date();

app.get('/', (req, res) =>{
    res.send(`<h1>Bienvenidos al servidor express</h1>`)
})

app.get('/products', (req, res) =>{
    res.send(`title: Escuadra, price: 123, `)})

app.get('/productsRandom', (req, res) =>{
    res.send(`Hoy es: ${date.getDate()} / ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`)
})

app.listen(PORT, () =>{
    console.log(`Example app listening at http://localhost:${PORT}`)
})