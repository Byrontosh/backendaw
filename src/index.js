const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Landing page")
})
app.get('/dashboard',(req,res)=>{
    res.send("Bienvenido - Usuaurio")
})
app.get('/about',(req,res)=>{
    res.send("Sobre nosotros")
})

app.listen(3000)
