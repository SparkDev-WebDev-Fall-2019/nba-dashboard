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
            padding: '10px 15px',
            // border: '1px solid Green'
        };
        
        const DNPBox = {
            display: 'flex',
            
            justifyContent: 'center',
            padding: '0 15px',
            // border: '1px solid Green'
        };

        const boxStat = {
            width: '1px',
            fontFamily: "Rajdhani",
            fontWeight: 400,
            lineHeight: 1.5
        };

        // TODO If the props aren't loaded yet, don't display anything
        if (!this.props.blocks) {
            return (<div style={DNPBox}> DNP THIS GAME </div>)
        }
        else {

            // console.log('AVAILABLE PLAYER STATS IN GAMES COMPONENT', this.props);

            return (
                

                    <div style={boxScore}>

                        {/* TODO Get Date or team played against */}

                        <div style={boxStat}> {this.props.min} </div>
                        <div style={boxStat}> {this.props.fgm} </div>
                        <div style={boxStat}> {this.props.fga} </div>
                        <div style={boxStat}> {this.props.fgp} </div>
                        <div style={boxStat}> {this.props.ftm} </div>
                        <div style={boxStat}> {this.props.fta} </div>
                        <div style={boxStat}> {this.props.ftp} </div>
                        <div style={boxStat}> {this.props.offReb} </div>
                        <div style={boxStat}> {this.props.defReb} </div>
                        <div style={boxStat}> {this.props.totReb} </div>
                        <div style={boxStat}> {this.props.assists} </div>
                        <div style={boxStat}> {this.props.steals} </div>
                        <div style={boxStat}> {this.props.blocks} </div>
                        <div style={boxStat}> {this.props.turnovers} </div>
                        <div style={boxStat}> {this.props.pFouls} </div>
                        <div style={boxStat}> {this.props.points} </div>

                    </div>

            );

        }

    }
}



export default Game;