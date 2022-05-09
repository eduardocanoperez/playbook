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

app.get('/node', (req, res) => {
    const explorer1 = { id: 1, name: "explorer"}
    const explorer2 = { id: 2, name: "explorer"}
    const explorer3 = { id: 3, name: "explorer"}

    res.send([explorer1, explorer2, explorer3])
})

app.listen(port, () => {
    console.log("server listo!!!")
})