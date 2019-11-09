import React from 'react';

class Team extends React.Component {
    state = {}
    render() {

        return (

            <div>

                <p> Team is { this.props.team }</p>

            </div>

        );

    }
}

export default Team;