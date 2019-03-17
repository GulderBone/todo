import React, { Component } from 'react';
import Header from './components/layout/Header';
import TodosList from './components/TodosList';
import AddTodo from './components/AddTodo';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/items')
      .then(res => console.log(res.data));
  }

  toggleComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) } );
  }

  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <TodosList todosList={this.state.todos}
          toggleComplete={this.toggleComplete} 
          delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
