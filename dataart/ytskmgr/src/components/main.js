import React, { Component } from 'react';

import Menu from './main/menu.js'
import Tree from './main/tree.js'
//import Content from './main/content.js'

class Main extends Component {
  render() {
    return (
      <main>
        <Menu />
        <Tree />
      </main>
    );
  }
}

export default Main;