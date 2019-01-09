const express = require("express");
var session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Requiring passport as we've configured it
var passport = require("./config/passport");


//middleware for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Database Stuff
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/axe-throwing-app");
const db = require("./models");

//set up passport here
app.use(session({ secret: "keyboard", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//login post route

app.post("/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  // res.json("/members");
  res.json({success: true, message: "woo it worked"});
});

 // Route for getting some data about our user to be used client side
//  app.get("/api/user_data", function(req, res) {
//   if (!req.user) {
//     // The user is not logged in, send back an empty object
//     res.json({});
//   }
//   else {
//     // Otherwise send back the user's email and id
//     // Sending back a password, even a hashed password, isn't a good idea
//     res.json({
//       email: req.user.email,
//       id: req.user.id
//     });
//   }
// });

//all users test route
app.get("/allusers", function(req,res){
  console.log("all users were hit"),
  // get all users and send back in json blob
  db.User
  .find({})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));

})


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
