const express = require('express');
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

mongoose.connect('const db ="mongodb+srv://navodita2110174:NAV2002@cluster0.3eg52xn.mongodb.net/?retryWrites=true&w=majority";');

app.listen(4000,function(){
    console.log('server ir')
})