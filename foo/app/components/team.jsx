import React from 'react';

class TeamComponent extends React.Component {
    render() {
        return <h1>Team {this.props.params.teamcode}</h1>
    }
}

export default TeamComponent;