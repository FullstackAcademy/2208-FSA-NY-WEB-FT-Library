const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
})

const list = [
    {'name':"Luke"},
    {'name':"Drew"},
]

app.get('/products', (req, res)=>{
    res.send(list[1])
})