// Load express
const express = require("express");
// Load path
const path = require("path");
// require the To Do "database"
const todoDb = require("./data/todo-db");

// Create our express app...
const app = express();

// Configure the app (app.set)
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.redirect("/puppies");
});

app.get("/home", function (req, res) {
  res.render("home");
});

app.get("/puppies", function (req, res) {
  res.send("<h1>corgis</h1>");
});

app.get("/todos", function (req, res) {
  res.render("todos/index.ejs", {
    todos: todoDb.getAll(),
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000!!!");
});
