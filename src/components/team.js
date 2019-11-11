import React from 'react';

class Team extends React.Component {
    state = {}
    render() {

        return (

            <div>

                <h1> Team is : { this.props.team }</h1>

            </div>

        );

    }
}

export default Team;