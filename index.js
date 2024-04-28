require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});


// routes
app.use("/api/products", productRoute);



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});