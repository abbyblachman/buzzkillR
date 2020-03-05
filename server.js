const express = require("express");
const mongoose = require("mongoose");

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3002;

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