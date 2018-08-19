//Include the following packages
var path = require("path");

//Exports the following blocks of code
module.exports = function(app){

    //GET function that will direct users to home page
    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //GET function that will direct users to survey page
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //Get function that will route to Custom CSS file so that HTML files can read it
    app.get("/style.css", function(req,res){
        res.sendFile(path.join(__dirname, "../public/style.css"))
    });


};