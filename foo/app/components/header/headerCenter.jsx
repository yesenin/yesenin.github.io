import React from 'react';

import MenuComponent from "./menu.jsx";

class HeaderCenterComponent extends React.Component {

  render() {
      return <div className="center"><MenuComponent/></div>;
  }
}

export default HeaderCenterComponent;