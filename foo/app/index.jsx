import React from 'react';
import {render} from 'react-dom';
import css from './main.less';

import HeaderComponent from './components/header.jsx';
import SeasonsComponent from './components/seasons.jsx';
import SeasonComponent from './components/season.jsx';
import TeamsComponent from './components/teams.jsx';
import TeamComponent from './components/team.jsx';
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
      <IndexRoute component={SeasonsComponent} />
      <Route path='seasons' component={SeasonsComponent} />
      <Route path='seasons/:alias' component={SeasonComponent} />
      <Route path='teams' component={TeamsComponent} />
      <Route path='teams/:teamcode' component={TeamComponent} />
    </Route>
  </Router>, document.getElementById('app'));