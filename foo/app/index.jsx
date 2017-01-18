import React from 'react';
import {render} from 'react-dom';
import css from './main.less';

import HeaderComponent from './components/header.jsx';
import ContentComponent from './components/content.jsx';
import Content2Component from './components/content2.jsx';
import FooterComponent from './components/footer.jsx';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class App extends React.Component {

    render() {
        return <div className="app">
                <HeaderComponent />
                {this.props.children}
                <FooterComponent />
            </div>
    }
}

render(<Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ContentComponent} />
      <Route path='seasons' component={ContentComponent} />
      <Route path='teams' component={Content2Component} />
    </Route>
  </Router>, document.getElementById('app'));