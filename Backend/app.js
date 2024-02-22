const express = require('express');
const bodyparser = require('body-parser');
const employeerouter = require('./routes/employeeroutes');
const cors = require('cors');


let app = express();

app.use(bodyparser.json());
app.use(cors());
// app.use(cors());

app.use('/employees',employeerouter);

module.exports = app;