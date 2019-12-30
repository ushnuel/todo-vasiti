import React, { Component } from 'react';
import Navbar from '../navbar';
import axios from 'axios';

class CreateTodo extends Component {
  state = {
    title: '',
    description: '',
    message: '',
  };
  titleChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  };
  descriptionChangeHandler = (e) => {
    this.setState({ description: e.target.value });
  };
  onsubmitHandler = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const data = { title, description };
    axios
      .post('http://localhost:5000/todo/create', data)
      .then((response) => {
        this.setState({ message: response.data.data.message });
      })
      .catch(this.setState({ message: 'An error occured' }));
  };
  render() {
    return (
      <>
        <Navbar />
        <form action='' onSubmit={this.onsubmitHandler}>
          <label htmlFor='title'>Todo Label</label>
          <input type='text' onChange={this.titleChangeHandler} />
          <label htmlFor='description'>Todo Description</label>
          <input type='text' onChange={this.descriptionChangeHandler} />
          <button type='submit'>Create</button>
        </form>
      </>
    );
  }
}

export default CreateTodo;
