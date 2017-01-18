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
    return <li><h1>{this.props.team.key}</h1>
    <ul>{foo}</ul></li>
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
        console.log(teamList);
        let foo = _.map(teamList, (a, b) => ({key: b, value: a}));
        console.log(foo);
        this.setState({teams: _.sortBy(foo, (x) => x.key)});
      });
  }

  render() {
    const items = this.state.teams.map((team) => <TeamGroupItem key={team.key} team={team} />)
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