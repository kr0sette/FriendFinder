//Include the following packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Create an express server
var app = express();

//set port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routing?
//apiroutes.js
//htmlroutes.js?

//Start server with a listener
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});