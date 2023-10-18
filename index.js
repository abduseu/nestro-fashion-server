const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcome to nest-server')
})

app.listen(port, ()=>{
    console.log(`nest-server is running on ${port}`)
})