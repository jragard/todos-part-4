import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList.jsx';
import { Link } from 'react-router-dom';

export default class App extends Component {
  
render() { 
    const { todos, toggleTodo, removeItem, removeAll, handleChange, handleSubmit } = this.props;
    
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
            <TodoList todos={todos} toggleTodo={toggleTodo} removeItem={removeItem}/>
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

