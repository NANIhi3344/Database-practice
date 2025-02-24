const expresss = require('express');
const mongoose = require('mongoose');
require('dotenv').config;

const { Item, Restaurant } = require('./RestaurantSchema');

const PORT = process.env.PORT || 3000;

const app = expresss();

app.get('/',(req,res) => {
    res.send("<h1>Hello! Welcome to my Assignment!</h1>");
})

app.listen(PORT, ()=>{
    console.log(`Server running on the PORT: ${PORT}`);
})





