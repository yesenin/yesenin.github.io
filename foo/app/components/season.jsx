import React from 'react';

class SeasonComponent extends React.Component {
  render() {
      return <main>
      <article><h1>Season {this.props.params.alias}</h1></article></main>;
  }
}

export default SeasonComponent;