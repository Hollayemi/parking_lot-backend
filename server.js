require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db')
connectDB()
const apiPrefix = "/api/v1"
const auth = require('./Routes/auth');
const sensor = require('./Routes/sensorRoute')

const app = express();
app.use(cors());
app.use(express.json());

app.use(`${apiPrefix}/parkin_lot`, auth);
app.use(`${apiPrefix}/parkin_lot`, sensor);


app.listen(process.env.PORT || 3030, () => {
    console.log(`server running at port ${process.env.PORT}`);
});

