require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const chalk = require("chalk");
const bodyParser = require("body-parser");
const { mogoDBConection } = require("./configs/index");


// app creation
const app = express();

mogoDBConection.connect();


app.use(cors());


//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes

require("./routes/index")(app);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function (err, req, res, next) {
  console.log(chalk.red("ERROR=====================================> START"));
  console.log(err);
  console.log(chalk.red("ERROR=====================================> END"));

  res.status(err.status || 500);
  res.setHeader('Content-Type', 'application/json');
  res.json({ message: err.message || "Internal Server Error", error: true, errors: err.errors || [] });
});



module.exports = app;




