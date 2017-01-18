import React from 'react';

import HeaderRightComponent from './header/headerRight.jsx';
import HeaderCenterComponent from './header/headerCenter.jsx';
import HeaderLeftComponent from './header/headerLeft.jsx';

class HeaderComponent extends React.Component {

  render() {
      return <header className="page-header">
        <HeaderRightComponent />
        <HeaderCenterComponent />
        <HeaderLeftComponent />
      </header>;
  }
}

export default HeaderComponent;