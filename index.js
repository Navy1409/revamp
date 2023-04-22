const express = require('express');
const mongoose = require("mongoose");
const authRouter = require('./routers/auth');
const plumRouter = require('./routers/plumber');
const carpRouter = require('./routers/carpenter');
const elecRouter = require('./routers/electrician');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(authRouter);
app.use(plumRouter);
app.use(carpRouter);
app.use(elecRouter);

app.use(express.static('public'));
app.use('/images', express.static('images'))

const db ="mongodb+srv://navodita2110174:NAV2002@cluster0.3eg52xn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db).then(()=>{
    console.log("connction successfull");
}).catch((e)=>{
    console.log(e);
});
app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get('/signup.html',function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.get('/login.html',function(req,res){
    res.sendFile(__dirname + "/login.html");
});

app.get('/about us.html',function(req,res){
    res.sendFile(__dirname + "/about us.html");
});

app.get('/signup.html',function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.get('/carpenter.html',function(req,res){
    res.sendFile(__dirname + "/carpenter.html");
});

app.get('/plumber.html',function(req,res){
    res.sendFile(__dirname + "/plumber.html");
});

app.get('/electrician.html',function(req,res){
    res.sendFile(__dirname + "/electrician.html");
});

app.get('/index2.html',function(req,res){
    res.sendFile(__dirname + "/index2.html");
});


app.listen(PORT,"0.0.0.0", () =>{
    console.log(`Server listening on Port ${PORT}`);
})