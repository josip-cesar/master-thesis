import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { history } from './history';

import App from './App';
import store from './config/store'

const app = <Provider store={store}>
  <Router history={history} >
    <App />
  </Router>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
