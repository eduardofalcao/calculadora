const express = require('express')
const app = express()

app.get('/', (req, res ) => res.send('Hello world'))

const YAML = require("yamljs")
const swaggerUI = require('swagger-ui-express')
const swaggerDOC = YAML.load("./swagger.yaml")
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDOC))

// rotas
const calcRouter = require('./routes/calculadora')
app.use("/calculadora", calcRouter);

app.listen(3000, (req, res) => console.log('listening...'))