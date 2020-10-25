const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const requireDir = require('require-dir');
requireDir('./src/models/');

//Create APP
const app = express();
//DB Connection
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology:true });

//Use Json Body
app.use(express.json());
app.use('/api', require('./src/routes'));
app.use(cors());

app.listen(3001);