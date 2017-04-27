import React, { Component } from 'react'

import TreeContainer from './TreeContainer'
import ModalContainer from './ModalContainer'

class App extends Component {
  render() {
    return (
        <div>
          <TreeContainer />
          <ModalContainer />
        </div>
    )
  }
}

export default App
