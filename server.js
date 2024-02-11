const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { bgCyan } = require('colors')
require('colors')

const connectDb = require('./config/config.js');

// dotenv config
dotenv.config()

connectDb()

// rest object
const app = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// routes
app.use('/api/items', require('./routes/itemRoute.js'))
app.use('/api/users', require('./routes/userRoute.js'))
app.use('/api/bills', require('./routes/billsRoute.js'))

// port
const PORT = process.env.PORT || 8083

// listen 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgCyan.white)
})