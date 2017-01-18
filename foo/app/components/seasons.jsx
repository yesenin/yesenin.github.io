import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import {Link} from 'react-router';

class SeasonItem extends React.Component {
  render() {
    return <li><Link to={'seasons/' + this.props.season.alias}>{this.props.season.title}</Link></li>
  }
}

class SeasonList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seasons: []
    };
  }

  componentDidMount() {
    axios.get('http://yesenin.github.io/yepl/seasons.json')
      .then(response => {
        let foo = _.sortBy(response.data.seasons, (item) => item.title);
        this.setState({seasons: foo});
      });
  }
  
  render() {
    const items = this.state.seasons.map((season) => <SeasonItem key={season.title} season={season} />);
    return <ul>{items}</ul>
  }
}

class ContentComponent extends React.Component {
  

  render() {
      return <main>
      <article>
        <div className="caption">Season tables</div>
        <div className="text"><SeasonList /></div>
        </article>
      </main>;
  }
}

export default ContentComponent;