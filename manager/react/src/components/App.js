import React, { Component, PropTypes } from 'react'

class App extends Component {
  render() {
    return (
        <div>
            {this.props.value.folders[0].name}
        </div>
    )
  }
}

export default App
