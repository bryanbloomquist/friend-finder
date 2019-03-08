var friendsList = require("../data/friends")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friendsList.push(newFriend);
        res.json(newFriend);
    });
    
}