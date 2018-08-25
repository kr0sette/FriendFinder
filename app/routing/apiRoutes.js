//Load friend data from friends.js
var friends = require("../data/friends");

//Export the following blocks of code
module.exports = function(app){

    //GET request that routes users to the JSON data when they visit this URL
    app.get("/api/friendsdata", function(req, res){
        res.json(friends);
    });

    //POST request that receives webform data and directs it accordingly....
    app.post("/api/friendsdata", function(req, res){
        var formScores = req.body.scores;
        // var totalDifference = 0;

        //Loops through all stored friends
        for(i=0; i < friends.length; i++){
            var diffArray = [];
                for(j=0; j < formScores.length; j++){
                    var storedScore = parseInt(friends[i].scores[j]);
                    var userScore = parseInt(formScores[j]);
                    var diff = Math.abs(userScore - storedScore);
                    diffArray.push(diff);
                    
                }
            console.log("diffArray " + diffArray);
            console.log("===");
        }


        //adds newFriend data into the existing friendsList array in friends.js
        // friends.push(req.body);
        //Also include compatibility calculations here
    });




};