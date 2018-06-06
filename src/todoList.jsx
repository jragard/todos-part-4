import React, { Component } from 'react';
import './index.css';
import TodoItem from './todoItem.jsx';

class TodoList extends Component {
  
    render() {
      const { todos, toggleTodo, removeItem } = this.props;
      return (
  
        <React.Fragment>
            <ul className="todo-list">
            {todos.map( todo => <TodoItem todos={todos} index={todo.id} key={todo.id} value={todo.title} completed={todo.completed} toggleTodo={toggleTodo} removeItem={removeItem}/> )}
             </ul>
        </React.Fragment>
      )
    }
  }

  export default TodoList;