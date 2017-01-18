import React from 'react';
import axios from 'axios'
import {Link} from 'react-router'
import _ from 'underscore';

class TeamItem extends React.Component {
  render() {
    return <li><Link to={'teams/' + this.props.team.code}>{this.props.team.name}</Link></li>
  }
}

class TeamGroupItem extends React.Component {
  render() {
    let bar = _.sortBy(this.props.team.value, (x) => x.name);
    let foo = bar.map((x) => <TeamItem key={x.code} team={x} />);
    return <div className="team-group"><h2>{this.props.team.key}</h2>
    <ul className="team-list">{foo}</ul></div>
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
        let teamList = _.groupBy(response.data, (item) => item.name[0]);
        let foo = _.map(teamList, (a, b) => ({key: b, value: a}));
        this.setState({teams: _.sortBy(foo, (x) => x.key)});
      });
  }

  render() {
    const items = this.state.teams.map((team) => <TeamGroupItem key={team.key} team={team} />)
    return <div className="team-container">{items}</div>
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