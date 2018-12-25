import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todos, toggleTodo}) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}
        className={todo.completed ? 'toggled' : 'not-toggled'}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;




