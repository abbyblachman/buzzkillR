const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var cors = require('cors')

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3002;

/*Adds the react production build to serve react requests*/

app.use(cors())

/*React root*/
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
    });
    app.options("/*", cors());

// Define middleware here - so that you can pass raw json into the body 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes - client and API routes 
app.use(routes);


// connect to db, running on local machine, ready for heroku as well 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buzzkilldb");


// listening on port to start server 
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });