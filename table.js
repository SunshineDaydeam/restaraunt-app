// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [];
var reserved = [];


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/reserved", function(req, res){
    res.sendFile(path.join(__dirname, "reserved.html"))
})

app.post("/api/tables", function(req, res){
    var newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
});

app.post("/api/reserved", function(req, res){
    var reservedTable = req.body;
    reserved.push(reservedTable);
    res.json(reservedTable);
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
