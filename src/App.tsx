import { Link } from 'react-router'
import './App.css';

function App() {
  return (
    <ul>
      <li><Link to='/calendar'>Calendar</Link></li>
      <li><Link to='/hy'>Армянский язык</Link></li>
    </ul>
  )
}

export default App
