import React, { Component } from 'react';
import axios from 'axios';

class ViewTodos extends Component {
  state = {
    todos: '',
  };
  componentDidMount() {
    axios
      .get('http://localhost:5000/todo/feeds')
      .then((res) => {
        this.setState({ todos: res.data[0] });
      })
      .catch((error) => console.log(error));
  }
  render() {
    let todos = null;
    if (this.state.todos) {
      todos = this.state.todos.map((todo) => {
        return (
          <div key={todo.todoid}>
            <div>Title - {todo.title}</div>
            <div>Description - {todo.description}</div>
          </div>
        );
      });
    }
    return <div>{todos}</div>;
  }
}

export default ViewTodos;
