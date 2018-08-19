//Load friend data from friends.js
var friends = require("../data/friends");

//Export the following blocks of code
module.exports = function(app){

    //GET request that routes users to the JSON data when they visit this URL
    app.get("/api/friendsdata", function(req, res){
        res.json(friends);
    });

    //POST request that adds to the friend.js data when user submits through form
    app.post("/api/friendsdata", function(req, res){
        friends.push(req.body);
        //Also include compatibility calculations here
    });




};