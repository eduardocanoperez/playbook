// Usando objeto express
const express = require('express')

// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//routes
//methods HTTP: GET, POST, PUT, DELETE. "investigar"
app.get('/v1/explorers', (req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = { id: 1, name: "Explorer1" }
    const explorer2 = { id: 2, name: "Explorer2" }
    const explorers = [explorer1, explorer2]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers)

})

// metodo GET regresar informacion.
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "eduardo"}
    res.status(200).json(explorer)
})

//metodo POST crear informacion.
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

//metodo PUT para actualizar informacion.
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: "Updated!"})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: "Deleted"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})