import React, { Component } from 'react';
import Game from './Game';

class LastTenGames extends Component {
    state = {

    }
    render() {

        const boxScore = {
            // display: 'flex',
            // flexWrap: 'noWrap',
            // width: '60%',
            // margin: '0 auto',
            border: '1px solid blue'
        };

        // TODO If the props aren't loaded yet, don't display anything
        if (!this.props.games) {
            return (<div> Not loaded yet</div>)
        }
        else {

            console.log('AVAILABLE PLAYER STATS IN LAST 10 GAMES', this.props.games[0]);

            return (
                <div>

                    <h1> Last Ten Games </h1>
                    <div style={boxScore}>

                        <div>
                            
                            <Game {...this.props.games[0]} />

                        </div>
                        {/* <Averages Stat={"PPG"} Average={this.props.playerPPG} />
                        <Averages Stat={"RPG"} Average={this.props.playerRPG} />
                        <Averages Stat={"APG"} Average={this.props.playerAPG} />
                        <Averages Stat={"SPG"} Average={this.props.playerSPG} />
                        <Averages Stat={"BPG"} Average={this.props.playerBPG} />
                        <Averages Stat={"TO"} Average={this.props.playerTOPG} />
                        <Averages Stat={"FGA"} Average={this.props.playerFGAPG} />
                        <Averages Stat={"FGM"} Average={this.props.playerFGMPG} />
                        <Averages Stat={"FG%"} Average={this.props.FGPercent} />
                        <Averages Stat={"FTA"} Average={this.props.playerFTAPG} />
                        <Averages Stat={"FM"} Average={this.props.playerFTAMPG} />
                        <Averages Stat={"FT%"} Average={this.props.FTPercent} /> */}

                    </div>

                </div>
            );

        }

    }
}



export default LastTenGames;