var express = require("express");
const todos = require("../controllers/todos");
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require("../controllers/todos");

// All actual paths start with "localhost:3000/todos"
router.get("/", todosCtrl.index);
// get /todos/new
router.get("/new", todosCtrl.new);
router.get("/:id", todosCtrl.show);
// post /todos
router.post("/", todosCtrl.create);
// delete /todos/:id
router.delete("/:id", todosCtrl.delete);
// Step 2: GET /todos/:id/edit
router.get("/:id/edit", todosCtrl.edit);
// PUT /todos/:id
router.put("/:id", todosCtrl.update);

module.exports = router;
