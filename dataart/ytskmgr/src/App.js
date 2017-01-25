import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
