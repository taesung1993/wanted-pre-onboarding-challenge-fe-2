// @ts-check
const {
  createTodo,
  getTodo,
  getTodos,
  clearTodos,
  deleteTodo,
  updateTodo,
} = require("./todos");

createTodo("핸드폰 구입");
createTodo("청소하기");

console.log(getTodos());
console.log(getTodo(1));

updateTodo(1, { content: "사전과제 제출" });

console.log(getTodos());

deleteTodo(1);

console.log(getTodos());

clearTodos();

console.log(getTodos());
