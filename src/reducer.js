import list from './todos.json';
import { MARK_COMPLETE, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED } from './actions.js'

const initialState = {
    todos: list,
    text: ""
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_COMPLETE:

            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {
                    ...todo, 
                    completed: !todo.completed
                } : { 
                    ...todo
                })
            };
        case ADD_TODO:

            let newState = {
                ...state
            }
            if (!action.payload.length) {
                return;
            }

            return {
                ...state, todos: [...state.todos, {
                                                   "userId": 1,
                                                   "id": state.todos.length + 1,
                                                   "title": action.payload,
                                                   "completed": false
                                                   }
                                  ]
                };
            case DELETE_TODO:
                let removedArray = [];
                
                for (let i = 0; i < state.todos.length; i++) {
                    if (action.payload != state.todos[i].id) {
                        removedArray.push(state.todos[i])
                    }
                }

                return {
                    todos: removedArray
                }
            case CLEAR_COMPLETED:
                let completedItems = state.todos.filter(todo => !todo.completed);
                return {
                    todos: completedItems
                }
            
            
        default:
            return state;
            
    }
}

export default todosReducer;

// removeAll = (e) => {
//     const { todos } = this.state;
//     let completedItems = todos.filter(todo => !todo.completed)
//     this.setState(
//       {
//         todos: completedItems
//       }
//     )
//  }
