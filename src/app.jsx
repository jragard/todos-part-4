import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList.jsx';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo } from './actions.js'
import { withRouter } from 'react-router-dom';

class App extends Component {

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addTodo(this.state.text));
    let inputField = document.getElementById("input");
    inputField.value = "";
  }

  render() {
    const { handleSubmit, handleChange } = this;

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



          <Switch>

            <Route
              exact path="/"
              render={props => <TodoList {...props} filter="all" />} />
            <Route
              path="/active"
              render={props => <TodoList {...props} filter="active" />} />
            <Route
              path="/completed"
              render={props => <TodoList {...props} filter="completed" />} />

          </Switch>





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



