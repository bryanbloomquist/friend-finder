const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});