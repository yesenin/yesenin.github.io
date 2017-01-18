import React from 'react';
import { Link } from 'react-router'

class MenuComponent extends React.Component {

  render() {
      return <nav>
        <div><Link to='/teams'>Teams</Link></div>
        <div><Link to='/seasons'>Seasons</Link></div>
      </nav>;
  }
}

export default MenuComponent;