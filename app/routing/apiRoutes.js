var friendsList = require("../data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsList);
    });

    // app.get("/api/friends/:friend", function(req, res) {
    //     var chosen = req.params.character;
    //     console.log(chosen);
    //     for (var i = 0; i < friendsList.length; i++) {
    //         if (chosen === friendsList[i].routeName) {
    //             return res.json(friendsList[i]);
    //         }
    //     }
    //     return res.json(false);
    // });

    app.post("/api/friends", function(req, res) {
        var newfriend = req.body;
        // newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newfriend);
        friendsList.push(newfriend);
        res.json(newfriend);
    });
    
}