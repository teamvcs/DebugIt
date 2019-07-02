// Imports: React
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx'
// Imports: CSS
import './styles.css';
import { createStore, combineReducers } from 'redux';
import userReducer from './redux/reducers/userReducer';
import { Provider } from 'react-redux';


const allReducers = combineReducers({
  userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(allReducers, composeEnhancers);


// Render App
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);