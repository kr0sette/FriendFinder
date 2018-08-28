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
        //Stores user's scores
        var formScores = req.body.scores;
        //An array that contains the total differences between User and each individual friend
        var totalDiffs = [];

//=============LOGIC FOR CALCULATING DIFFERENCES =============
        //Loops through all stored friends
        for(i=0; i < friends.length; i++){
            //Empty array that stores differences between User and an individual Friend in friends.js
            var diffArray = [];
                
                for(j=0; j < formScores.length; j++){
                    //variable to store individual friends' scores
                    var storedScore = parseInt(friends[i].scores[j]);
                    //variable to store user's scores
                    var userScore = parseInt(formScores[j]);
                    //Caculates difference between each user score and each friend score
                    var diff = Math.abs(userScore - storedScore);
                    //Push differences to empty diffArray
                    diffArray.push(diff);
                    
                }
                //console.log("diffArray " + diffArray);
            //Logic for .reduce method
            var reducer = (accumulator, currentValue) => accumulator + currentValue;
                // console.log(diffArray.reduce(reducer));
            //Calculate the sum of score differences and push them to an Array that contains the total differences
            totalDiffs.push(diffArray.reduce(reducer));
                // console.log("===");
        }
        console.log("totalDiffs " + totalDiffs);


        //adds newFriend data into the existing friendsList array in friends.js
        // friends.push(req.body);
        //Also include compatibility calculations here

//=============LOGIC FOR MATCHING MATCHING WITH A PERSON =============
        var min = totalDiffs.indexOf(Math.min.apply(null, totalDiffs));
        console.log(min);
        console.log(friends[min].name);

    });







};