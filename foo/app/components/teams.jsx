import React from 'react';
import axios from 'axios'
import {Link} from 'react-router'
import _ from 'underscore';
class TeamItem extends React.Component {
  render() {
    return <li><Link to={'teams/' + this.props.team.code} >{this.props.team.name}</Link></li>
  }
}

class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    axios.get('http://yesenin.github.io/yepl/teams.json')
      .then(response => {
        let teamList = _.sortBy(response.data, (item) => item.name);
        this.setState({teams: teamList});
      });
  }

  render() {
    const items = this.state.teams.map((team) => <TeamItem team={team} key={team.code} />)
    return <ul>{items}</ul>
  }
}

class TeamsComponent extends React.Component {

  render() {
      return <main>
      <article>
        <div className="caption">Team list</div>
        <TeamList />
        </article>
      </main>;
  }
}

export default TeamsComponent;