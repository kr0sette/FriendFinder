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
        var formData = req.body;
    //    console.log(formData.scores);
        var 
        for(i=0; i < formData.scores.length; i++){
            console.log(formData.scores[i]);
        };
        for(i=0; i < friends.length; i++){
                for(j=0; j < friends[i].scores.length; j++){
                    console.log(friends[i].scores[j]);
                }
            console.log("=====");

        }

        //adds newFriend data into the existing friendsList array in friends.js
        // friends.push(req.body);
        //Also include compatibility calculations here
    });




};