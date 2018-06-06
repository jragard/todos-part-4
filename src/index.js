import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './app.jsx';
import list from './todos.json';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: list, text: ""}
    }

// loops through the todos array, if the checkbox target's id matches a particular element's id, this toggles/updates the "completed" state

  toggleTodo = (e) => {
    const { todos } = this.state
    
    for (let i = 0; i < todos.length; i++) {
        // eslint-disable-next-line
        if (e.target.id == todos[i].id) {
            todos[i].completed = !todos[i].completed;
            this.setState( {
                "completed": todos[i].completed
            })
        }
    }
 }

// removes item from the todo List when user clicks the red X button

  removeItem = (e) => {
    const { todos } = this.state
    let removedArray = [];

    for (let i = 0; i < todos.length; i++) {
        // eslint-disable-next-line 
        if (e.target.id != todos[i].id) {
            removedArray.push(todos[i])
        }
  }
    this.setState(
      {
          todos: removedArray
      }
   )
 }

// removes all todo Items marked as complete when user clicks the "clear completed" button

  removeAll = (e) => {
    const { todos } = this.state;
    let completed = todos.filter(todo => !todo.completed)
    this.setState(
      {
        todos: completed
      }
    )
 }

// changes the "text" state to whatever the user inputs into the field

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

// handles the submit event when user presses enter.  updates state to include user's todo item

  handleSubmit = (e) => {

    const { todos, text} = this.state;
    e.preventDefault();

    if (!text.length) {
      return;
    }
    
    this.setState(prevState => (
      {
      todos: [...prevState.todos, {"userId": 1,
                                   "id": todos.length + 1,
                                   "title": text,
                                   "completed": false }],
      text: ""
      })
    );
      
      let inputField = document.getElementById("input");
      inputField.value = "";
 }

 testState = (e) => {
     console.log(this.state);
 }

    
    render() {

        const { todos, text } = this.state;
        const { toggleTodo, removeItem, removeAll, handleChange, handleSubmit } = this;

        const ActiveList = todos.filter(todo => !todo.completed);
        const CompletedList = todos.filter(todo => todo.completed);

        return(
    <BrowserRouter>
        <Switch>

            <Route 
            exact path="/"
            render={props => <App {...props} todos={todos} text={text} toggleTodo={toggleTodo} removeItem={removeItem} removeAll={removeAll} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
            <Route 
            path="/active"
            render={props => <App {...props} todos={ActiveList} text={text} toggleTodo={toggleTodo} removeItem={removeItem} removeAll={removeAll} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
            <Route
            path="/completed"
            render={props => <App {...props} todos={CompletedList} text={text} toggleTodo={toggleTodo} removeItem={removeItem} removeAll={removeAll} handleChange={handleChange} handleSubmit={handleSubmit} />} />

        </Switch>
    </BrowserRouter>
        )
    }
};


render(<Index />, document.getElementById('root'));

