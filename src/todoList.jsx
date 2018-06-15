import React, { Component } from 'react';
import './index.css';
import TodoItem from './todoItem.jsx';
import markCompleted from './actions.js'
import './reducer.js'
import store from './index.js'
import { connect } from 'react-redux';
import list from './todos.json'



class TodoList extends Component {

  render() {
      const { todos } = this.props;

      
     
      return (
  
        <React.Fragment>
            <ul className="todo-list">
            {todos.map( todo => <TodoItem todos={todos} id={todo.id} key={todo.id} value={todo.title} 
            completed={todo.completed} /> )}
            </ul>
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

  