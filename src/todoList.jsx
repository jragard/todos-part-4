import React, { Component } from 'react';
import './index.css';
import TodoItem from './todoItem.jsx';
import './reducer.js'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearComplete } from './actions.js'

class TodoList extends Component {

  removeAll = (e) => {
    this.props.dispatch(clearComplete())
  }

  render() {
    const { todos } = this.props;

    return (

      <React.Fragment>
        <section className="main">
          <ul className="todo-list">
            {todos.map(todo => <TodoItem todos={todos} id={todo.id} key={todo.id} value={todo.title}
              completed={todo.completed} />)}
          </ul>
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

          <button onClick={this.removeAll} className="clear-completed">Clear completed</button>

        </footer>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const routeObject = {
    all: state.todos,
    active: state.todos.filter(todo => !todo.completed),
    completed: state.todos.filter(todo => todo.completed)
  }


  return {
    todos: routeObject[ownProps.filter]
  }
}

export default connect(mapStateToProps)(TodoList);

