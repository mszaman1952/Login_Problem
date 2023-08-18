const express =require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/api');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// database connect 
const mongoUri = process.env.DATABASE_URL;

mongoose.connect(mongoUri)
.then(() => {
    console.log("Database is Connected");
})
.catch((err) => {
    console.log(err)
})

const port = process.env.port || 8000;

app.use("/api/v1", router)

module.exports = {app, port};







