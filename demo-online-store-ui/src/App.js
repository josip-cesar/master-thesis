import React, { Component } from 'react';

import Router from './Router'
import {Header} from './components/header/Header';



class App extends Component {
  render() {
    return <div className='page-container'>
    <Header />
      <Router />
    </div>
  }
}

export default App;
