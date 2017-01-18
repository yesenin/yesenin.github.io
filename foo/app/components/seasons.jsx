import React from 'react';
import axios from 'axios';

class SeasonItem extends React.Component {
  render() {
    return <li>{this.props.title}</li>
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
        const foo = response.data.seasons;
        this.setState({seasons: response.data.seasons});
      });
  }
  
  render() {
    const items = this.state.seasons.map((season) => <SeasonItem key={season} title={season} />);
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