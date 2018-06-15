import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { markCompleted, deleteTodo } from './actions.js'


class TodoItem extends Component {

  toggleTodo = (id) => () => {
    this.props.dispatch(markCompleted(id))
  }

  removeItem = (id) => () => {
    this.props.dispatch(deleteTodo(id))
 }

    render() {
      const { completed, index, value } = this.props;
      const { toggleTodo, removeItem } = this;
      return (
        <React.Fragment>
          <li className={completed ? "completed" : ""} >
            <div className="view">
                          
                <input checked={completed} id={index} className="toggle" type="checkbox" onChange={toggleTodo(this.props.id)}/>
                <label>{value}</label>
                <button className="destroy" id={index} onClick={removeItem(this.props.id)}></button>
          
            </div>
          </li>
        </React.Fragment>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      todos: state.todos,
      text: state.text
    }
  }

  export default connect(mapStateToProps)(TodoItem);

 