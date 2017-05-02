import React, {Component} from 'react'

import TreeContainer from './TreeContainer'
import ModalContainer from './ModalContainer'

/*
const App = ({params}) => {
    return <div>
      <TreeContainer folderFromUrl='0'/>
      <ModalContainer />
    </div>
}*/
class App extends Component {
  componentDidMount() {
  }
  render() {
    
    return <div>
      <TreeContainer folderFromUrl={this.props.match.params || 1}/>
      <ModalContainer />
    </div> 
  }
}

export default App
