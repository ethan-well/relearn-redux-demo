import React from 'react';
import {AddTodo, TodoList} from './todos/';

function TodoApp() {
  return(
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default TodoApp;
