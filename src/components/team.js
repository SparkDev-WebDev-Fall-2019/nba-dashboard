import React from 'react';

class Team extends React.Component {
    state = {}
    render() {

        return (

            <div>

                <h1> Team is : { this.props.Team }</h1>

            </div>

        );

    }
}

export default Team;