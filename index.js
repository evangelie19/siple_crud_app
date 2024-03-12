require('dotenv').config();

const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req,res) => {
    res.send("Hello from Node API Server Updates");
});

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});