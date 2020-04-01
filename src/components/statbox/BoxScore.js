import React, { Component } from 'react';
import StatBox from './StatboxAverages';
import '../../App.css';

class BoxScore extends Component {
    state = {
        playerAverages: this.props
    }

    render() {

        if (!this.props.playerPPG) {
            return (<div></div>)
        }
        else {

            // console.log('AVAILABLE PLAYER AVERAGES IN SB AVGS', this.props.playerPPG);

            return (

                <div className={this.props.display}>

                    <StatBox
                        boxSize = {this.props.boxSize}
                        playerPPG ={this.props.playerPPG}
                        playerRPG ={this.props.playerRPG}
                        playerAPG ={this.props.playerAPG}
                        playerSPG ={this.props.playerSPG}
                        playerBPG ={this.props.playerBPG}
                        playerTOPG ={this.props.playerTOPG}
                        playerFGAPG ={this.props.playerFGAPG}
                        playerFGMPG ={this.props.playerFGMPG}
                        FGPercent ={this.props.FGPercent}
                        playerFTAPG ={this.props.playerFTAPG}
                        playerFTAMPG ={this.props.playerFTAMPG}
                        FTPercent ={this.props.FTPercent}

                    />

                </div>

            );

        }

    }
}



export default BoxScore;