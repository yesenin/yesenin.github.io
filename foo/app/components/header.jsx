import React from 'react';

import HeaderRightComponent from './header/headerRight.jsx';
import HeaderCenterComponent from './header/headerCenter.jsx';
import HeaderLeftComponent from './header/headerLeft.jsx';

class HeaderComponent extends React.Component {

  render() {
      return <header className="page-header">
        <HeaderRightComponent />
        <HeaderCenterComponent active={this.props.active.type.name}/>
        <HeaderLeftComponent />
      </header>;
  }
}

export default HeaderComponent;