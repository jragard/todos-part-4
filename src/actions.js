export const MARK_COMPLETE = "MARK_COMPLETE";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"; 

export const markCompleted = (id) => {
    return {
        type: MARK_COMPLETE, 
        payload: id
    }
}

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const clearComplete = () => {
    return {
        type: CLEAR_COMPLETED
    }
}


