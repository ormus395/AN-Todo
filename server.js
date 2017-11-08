/* 
  1, Go over starting the app
  2, open up project
  3, install the dependencies
  4, create express app

*/

//Libs / dependencies
/*

  express is our backend framework, much like angular or react for the client side, 
  but express is used with node for quick and easy api development,
  path is a node native middleware for handling files and directories,
  mongoose is our Object Document Mapper used for connecting mongoDB to our app,
  and body-parser is our body parsing middleware used for easy HTTP request body parsing

*/
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const morgan = require('morgan');

// global app variable for express, and server port
const app = express();
const port = process.env.PORT || 3000;

//set up mongoose connection
mongoose.connect('mongodb://admin:admin@ds062448.mlab.com:62448/angular-todo')
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('Error when conecting to db'))
;

//Other MW/Dependencies
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//public
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname + '/public/index.html')
//Dev made Dependencies/MW
const todos = require('./routes/todos');
app.use('/api/todos', todos);

app.get('/*', (req, res) => { 
  res.sendFile('index.html')
})

app.listen(port, () => console.log(`Server started on ${port}`));
