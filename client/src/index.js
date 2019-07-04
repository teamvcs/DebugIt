// Imports: React
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Imports: CSS
import './styles.css';
import userReducer from './redux/reducers/userReducer';


const allReducers = combineReducers({
  userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(allReducers, composeEnhancers);


// Render App
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
