const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 3000 //localhost:3000

//localhost:3000
app.get('/', (req, res) => {
    res.send("hola a todos mis explorers")
})

//localhost:3000
app.get('/launchx', (req, res) => {
    res.send("bienvenidos a launch X")
})

app.listen(port, () => {
    console.log("server listo!!!")
})