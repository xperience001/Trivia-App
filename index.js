const express = require('express');
const app = express();
const port = process.env.PORT || 3201;
const mongoose = require('mongoose');
//const cookieParser = require('cookie-parser')
const mongodbString = 'mongodb://localhost:27017/new-trivia';
const bodyParser = require('body-parser');
const router = require('./app/routes/trivia');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookieParser());

app.use(router);

mongoose.promise = global.promise;
mongoose.connect(mongodbString, { useNewUrlParser: true})
.then( (db)=>{
    console.log('mongodb connected');
})
.catch( (err)=>{
    console.log('mongodb error', err)
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})