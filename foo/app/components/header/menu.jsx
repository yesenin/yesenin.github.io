import React from 'react';
import { Link } from 'react-router'

class MenuComponent extends React.Component {

  render() {
      return <nav>
        <div className={this.props.active == 'TeamsComponent' ? 'active' : ''}><Link to='/teams'>Teams</Link></div>
        <div className={this.props.active == 'ContentComponent' ? 'active' : ''}><Link to='/seasons'>Seasons</Link></div>
      </nav>;
  }
}

export default MenuComponent;