const express = require('express');
const path =require("path");

const app = express();

app.use("*", (req, res, next)=>{
    console.log(req.url, req.method);
    next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000);





app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
})

const list = [
    {'name':"Luke"},
    {'name':"Drew"},
    {'name':"Gus"},
    {'name':"Prof"},
    {'name':"Levar"},
    {'name':"Scar"}
]

app.get('/products', (req, res)=>{
    res.send(list)
})

app.get('/products/:id', (req, res)=>{
    const id = Number(req.params.id);
    res.send(
        `<div>
            <h1>${list[id].name}</h1>
            <img src="/${list[id].name}.png"/>
        </div>`
    )
})