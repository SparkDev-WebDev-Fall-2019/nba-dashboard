import React, { Component } from 'react';

class PlayerInfo extends Component {
    state = {}

    render() {

        const playerInfo = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '1 1 auto', /* Positive flex-shrink */
            marginTop:'3.2rem',
            color: 'rgb(236,239,241)',
            // border: '1px solid green'
        };

        // console.log('AVAILABLE PROPS IN Player Section CARD &&****&*', this.props);

        if (!this.props.leagues) {
            return (<div></div>)
        }
        else {

            return (
                <div style={playerInfo}>

                    <h1> {this.props.PlayerName} </h1>
                    <h2> {this.props.PlayerTeam} </h2>
                    <h2> Position: {this.props.leagues.standard.pos} </h2>
                    <h2> Jersey #: {this.props.leagues.standard.jersey} </h2>

                    <div className='divider'> </div>

                </div>


            );

        }

    }
}

export default PlayerInfo;