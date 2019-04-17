import React, { Component } from 'react'
import Todolist from "./todolist"
import AddForm from './AddForm';

export default class Todocomp extends Component {


  state = {
    todoitems: [{ id: 1, content: "First item yey" },]
  } //test items

  deleteElem = (id) => {
    console.log(id);
    const todoitems = this.state.todoitems.filter(todo => {
      return id !== todo.id
    });
    this.setState({
      todoitems: todoitems
    });
  }

  Additem = (todoelem) => {
    todoelem.id = Math.random();
    let todotemp = [...this.state.todoitems, todoelem];
    this.setState({
      todoitems: todotemp
    });

  }
  render() {
    return (
      <div>
        <h1 className="center red-text">Todo's List</h1>
        <Todolist todoitems={this.state.todoitems} deleteelem={this.deleteElem} />
        <AddForm additem={this.Additem} />
      </div>
    )
  }
}
