const Todo = require("../models/todo");

// controllers/todos.js

function index(req, res) {
  res.render("todos/index", {
    todos: Todo.getAll(),
    title: "All To-Dos",
  });
}

function show(req, res) {
  res.render("todos/show", {
    todo: Todo.getOne(req.params.id),
    title: "To-Do Details",
  });
}

function newTodo(req, res) {
  res.render("todos/new", { title: "New Todo" });
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  // Todo.create(req.body);
  // Do a redirect anytime data is changed
  Todo.create(req.body);
  res.redirect("/todos");
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/todos");
}

function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/edit", {
    title: "Edit To-Do",
    todo,
  });
}

function update(req, res) {
  req.body.done = !!req.body.done;
  // Update below has not been created yet.
  // Needs an id and then the updated data
  // We used req.body when we create the data
  // req.body is an object we're sending over to the update method...
  Todo.update(req.params.id, req.body);
  // Going back to the detail page (show page) in routes/todos.js
  // Get /todos/:id
  // String template literals for the id
  // redirect goes back to show functionality
  res.redirect(`/todos/${req.params.id}`);
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update,
};
