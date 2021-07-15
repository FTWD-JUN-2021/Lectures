const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pickle', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(cors())

app.use(bodyParser.json())

app.use('/', require('./routes'))


app.listen(process.env.PORT || 5000)