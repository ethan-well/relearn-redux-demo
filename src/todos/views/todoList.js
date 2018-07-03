import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

const TodoList = ({todos}) => {
  return (
    <ul>
    {
      todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))
    }
    </ul>
  );
};

TodoList.propTypes = {
  todos:  PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(TodoList);