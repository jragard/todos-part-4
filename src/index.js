import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './reducer.js'

let store = createStore(todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <BrowserRouter>
      <Provider store={store}>  
        <App />
      </Provider>  
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

export default store;


