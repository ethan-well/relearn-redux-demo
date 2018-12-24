import { ADD_TODO } from "./actionType.js";

let nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})