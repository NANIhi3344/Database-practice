const expresss = require('express');
require('dotenv').config;

const PORT = process.env.PORT || 3000;

const app = expresss();

app.get('/',(req,res) => {
    res.send("<h1>Hello! Welcome to my Assignment!</h1>");
})

app.listen(PORT, ()=>{
    console.log(`Server running on the PORT: ${PORT}`);
})




