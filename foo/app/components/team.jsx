import React from 'react';

class TeamComponent extends React.Component {
    render() {
        return <main>
      <article><h1>Team {this.props.params.teamcode}</h1></article></main>
    }
}

export default TeamComponent;