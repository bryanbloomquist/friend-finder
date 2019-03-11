var friendsList = require("../data/friends")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        var compatability = 50;
        var matchName;
        var matchPhoto;
        for (var i=0; i < friendsList.length; i++) {
            var newCompatability = 0;
            for (var x=0; x < friendsList[i].scores.length; x++) {
                newCompatability += Math.abs(parseInt(newFriend.scores[x]) - parseInt(friendsList[i].scores[x]))
            }
            if (parseInt(newCompatability) < parseInt(compatability)) {
                matchName = friendsList[i].name;
                matchPhoto = friendsList[i].photo;
                compatability = newCompatability;
            }
        }
        friendsList.push(newFriend);
        res.json({matchName: matchName, matchPhoto: matchPhoto});
    });
    
}