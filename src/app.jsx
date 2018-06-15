import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList.jsx';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo, clearComplete } from './actions.js'
import { withRouter } from 'react-router';

class App extends Component {

// removes all todo Items marked as complete when user clicks the "clear completed" button

  removeAll = (e) => {
    this.props.dispatch(clearComplete())
 }

// changes the "text" state to whatever the user inputs into the field

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

// handles the submit event when user presses enter.  updates state to include user's todo item

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addTodo(this.state.text));
    let inputField = document.getElementById("input");
    inputField.value = "";
  }
  
render() { 
    const { text } = this.props;
    const { removeAll, handleSubmit, handleChange } = this;

    // const ActiveList = this.props.todos.filter(todo => !todo.completed);
    // const CompletedList = this.props.todos.filter(todo => todo.completed);

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
                render={props => <TodoList {...props}  filter="all" text={text} /> } />
                <Route
                path="/active"
                render={props => <TodoList {...props} filter="active" text={text} /> } />
                <Route
                path="/completed"
                render={props => <TodoList {...props}  filter="completed" text={text} />} />

            </Switch>
           
          </section>

          <footer className="footer">
            
            <span className="todo-count"><strong>{this.props.todos.filter(todo => !todo.completed).length}</strong> item(s) left</span>

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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    text: state.text
  }
}

export default withRouter(connect(mapStateToProps)(App));



