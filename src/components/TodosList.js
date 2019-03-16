import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class TodosList extends Component {

  render() {
    return this.props.todosList.map((todo) => (
        <TodoItem key={todo.id} todo={todo}
        toggleComplete={this.props.toggleComplete}
        delTodo={this.props.delTodo} />
    ));
  }
}

TodosList.propTypes = {
  todosList: PropTypes.array.isRequired
}

export default TodosList;
