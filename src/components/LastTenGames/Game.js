import React, { Component } from 'react';
// import Game from './Game';

class Game extends Component {
    state = {

    }
    render() {

        const boxScore = {
            display: 'flex',
            flexWrap: 'noWrap',
            justifyContent: 'space-around',
            // width: '60%',
            margin: '0 auto',
            border: '1px solid Green'
        };

        // TODO If the props aren't loaded yet, don't display anything
        if (!this.props.blocks) {
            return (<div> Not GAME loaded yet</div>)
        }
        else {

            console.log('AVAILABLE PLAYER STATS IN GAMES COMPONENT', this.props);

            return (
                <div>

                    <div style={boxScore}>

                        <div> {this.props.min} </div>
                        <div> {this.props.fgm} </div>
                        <div> {this.props.fga} </div>
                        <div> {this.props.fgp} </div>
                        <div> {this.props.ftm} </div>
                        <div> {this.props.fta} </div>
                        <div> {this.props.ftp} </div>
                        <div> {this.props.offReb} </div>
                        <div> {this.props.defReb} </div>
                        <div> {this.props.totReb} </div>
                        <div> {this.props.assists} </div>
                        <div> {this.props.steals} </div>
                        <div> {this.props.blocks} </div>
                        <div> {this.props.turnovers} </div>
                        <div> {this.props.pFouls} </div>
                        <div> {this.props.points} </div>

                    </div>

                </div>
            );

        }

    }
}



export default Game;