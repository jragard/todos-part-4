import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList.jsx';
import { Route, Switch, Link } from 'react-router-dom';
import list from './todos.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: list, text: ""
    }
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
    let completedItems = todos.filter(todo => !todo.completed)
    this.setState(
      {
        todos: completedItems
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
  
render() { 
    const { todos, text } = this.state;
    const { toggleTodo, removeItem, removeAll, handleChange, handleSubmit } = this;

    const ActiveList = todos.filter(todo => !todo.completed);
    const CompletedList = todos.filter(todo => todo.completed);

    return (
      <React.Fragment>

        <section className="todoapp">
        
          <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
              <input
                id="input"
                placeholder="What needs to be done?"
                className="new-todo"
                onChange={handleChange}
                autoFocus
              />
            </form>
          </header>

          <section className="main">
            <Switch>
            <Route 
            exact path="/"
            render={props => <TodoList {...props} todos={todos} text={text} toggleTodo={toggleTodo} removeItem={removeItem} removeAll={removeAll} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
            <Route
            path="/active"
            render={props => <TodoList {...props} todos={ActiveList} text={text} toggleTodo={toggleTodo} removeItem={removeItem} removeAll={removeAll} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
            <Route
            path="/completed"
            render={props => <TodoList {...props} todos={CompletedList} text={text} toggleTodo={toggleTodo} removeItem={removeItem} removeAll={removeAll} handleChange={handleChange} handleSubmit={handleSubmit} />} />

            </Switch>
            {/* <TodoList todos={todos} toggleTodo={toggleTodo} removeItem={removeItem}/> */}
          </section>

          <footer className="footer">
            <span className="todo-count"><strong>{todos.filter(todo => !todo.completed).length}</strong> item(s) left</span>

            <ul className="filters">
           <li>
             <Link to="/">All</Link>
           </li>
           <li>
             <Link to="/active">Active</Link>
           </li>
           <li>
             <Link to="/completed">Completed</Link>
           </li>
         </ul>

            <button onClick={removeAll} className="clear-completed">Clear completed</button>
            
          </footer>

        
        </section>

      </React.Fragment>
    );
  };
};



