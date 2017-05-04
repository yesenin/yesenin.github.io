import React, {Component} from 'react'

import TreeContainer from './TreeContainer'
import ModalContainer from './ModalContainer'


const App = (foo) => {
  console.log(foo.match.params.dir)
    return <div>
      <TreeContainer folderFromUrl={parseInt(foo.match.params.dir) || 1}/>
      <ModalContainer />
    </div>
}

/*
class App extends Component {
  render() {
    
    return <div>
      <TreeContainer />
      <ModalContainer />
    </div> 
  }
}
*/
export default App
