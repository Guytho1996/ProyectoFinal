
'use strict';
require("dotenv").config();
const morgan = require('morgan');
const express = require('express');

let cors = require('cors')
let bodyParser = require("body-parser");

const app = express();
let router = express.Router();



app.use(cors())

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(morgan('dev'));


app.use("/", router);

//Llamada a las rutas de Group
require('./src/carrera/routes/carrera.routes')(app);


const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log('Server working on port : ' + PORT + '\x1b[32m%s\x1b[0m', ' Online'));