// data/todo-db.js

const todos = [
  { todo: "Feed Dogs", done: false },
  { todo: "Learn Express", done: false },
  { todo: "Buy Milk", done: false },
];

module.exports = {
  getAll: function () {
    return todos;
  },
};
