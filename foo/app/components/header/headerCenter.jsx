import React from 'react';

import MenuComponent from "./menu.jsx";

class HeaderCenterComponent extends React.Component {

  render() {
      return <div className="center"><MenuComponent active={this.props.active}/></div>;
  }
}

export default HeaderCenterComponent;