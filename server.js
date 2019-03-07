const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.use(express.urlencoded({extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});