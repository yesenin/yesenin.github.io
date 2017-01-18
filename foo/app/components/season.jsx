import React from 'react';

class SeasonComponent extends React.Component {
  render() {
      return <h1>Season {this.props.params.alias}</h1>;
  }
}

export default SeasonComponent;