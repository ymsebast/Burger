// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//data
var friends = require("./app/data/friends");


//html routing
var htmlroutes = require("./app/routing/htmlRoutes");
app.use('/',htmlroutes);

//api routing
var apiroutes = require("./app/routing/apiRoutes");
app.use('/',apiroutes); 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORTS " + PORT);
});