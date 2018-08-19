//Include the following packages
var express = require("express");
var bodyParser = require("body-parser");


//====================== SERVER SETUP ====================== 
//Create an express server
var app = express();

//Set port
var PORT = process.env.PORT || 7030;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Start server with a listener
app.listen(PORT, function(){
    console.log("App is listening on http://localhost:" + PORT);
});

//====================== /SERVER SETUP ====================== 


//====================== ROUTING SETUP ====================== 
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//====================== /ROUTING SETUP ====================== 

//Routing?
//apiroutes.js
//htmlroutes.js