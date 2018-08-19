//Include the following packages
var express = require("express");
var bodyParser = require("body-parser");


//====================== SERVER SETUP ====================== 
//Create an express server
var app = express();

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set port
var PORT = process.env.PORT || 8080;

//Start server with a listener
app.listen(PORT, function(){
    console.log("App is listening on http://localhost:" + PORT);
});

//====================== /SERVER SETUP ====================== 


//====================== ROUTING SETUP ====================== 
var apiR = require("./app/routing/apiRoutes");
var htmlR= require("./app/routing/htmlRoutes");


//====================== /ROUTING SETUP ====================== 

//Routing?
//apiroutes.js
//htmlroutes.js?