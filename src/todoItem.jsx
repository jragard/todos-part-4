import React, { Component } from 'react';
import './index.css';

class TodoItem extends Component {

    

    render() {
      const { completed, index, toggleTodo, value, removeItem } = this.props;
      return (
        <React.Fragment>
          <li className={completed ? "completed" : ""} >
            <div className="view">
                          
                <input checked={completed} id={index} className="toggle" type="checkbox" onChange={toggleTodo}/>
                <label>{value}</label>
                <button className="destroy" id={index} onClick={removeItem}></button>
          
            </div>
          </li>
        </React.Fragment>
      );
    }
  }

  export default TodoItem;