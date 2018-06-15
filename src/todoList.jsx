import React, { Component } from 'react';
import './index.css';
import TodoItem from './todoItem.jsx';
import './reducer.js'
import { connect } from 'react-redux';

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

  