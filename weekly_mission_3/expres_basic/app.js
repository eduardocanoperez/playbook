const express = require('express')
const app = express()
const port = 3000 //localhost:3000

//localhost:3000
app.get('/', (req, res) => {
    res.send("hola a todos mis explorers")
})

app.listen(port, () => {
    console.log("server listo!!!")
})