import React, { Component } from 'react';
import Averages from './StatAverages';
import '../../App.css';

class Statbox extends Component {
    state = {
        playerAverages: this.props
    }
    render() {

        // console.log('Props For Statbox Averages: ', this.props)

        const container = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '1 1 auto', /* Positive flex-shrink */
            width: '100%',
            margin: '20px auto 30px auto',
            // border: '1px solid yellow'
        };

        const boxScore = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '1 1 auto', /* Positive flex-shrink */
            color: 'blue',
            // border: '1px solid blue'
        };

        const header = {
            textAlign: 'center',
            fontFamily: "Rajdhani",
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#eceff1'
        };

        // TODO If the props aren't loaded yet, don't display anything
        if (!this.props.playerPPG) {
            return (<div></div>)
        }
        else {

            // console.log('AVAILABLE PLAYER AVERAGES IN SB AVGS', this.props);

            return (


                <div style={container}>




                    {this.props.boxSize === 'large'
                        ?
                        <React.Fragment>

                            <h1 style={header}> '18 - '19 SEASON AVERAGES </h1>

                            <div style={boxScore}>

                                <Averages Stat={"PPG"} Average={this.props.playerPPG} />
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
                                <Averages Stat={"FT%"} Average={this.props.FTPercent} />

                            </div>

                        </React.Fragment>

                        :
                        <React.Fragment>

                            <h1 style={header}> '18 - '19 SEASON AVERAGES </h1>

                            <div style={boxScore}>

                                <Averages Stat={"PPG"} Average={this.props.playerPPG} />
                                <Averages Stat={"RPG"} Average={this.props.playerRPG} />
                                <Averages Stat={"APG"} Average={this.props.playerAPG} />
                                <Averages Stat={"SPG"} Average={this.props.playerSPG} />
                                <Averages Stat={"BPG"} Average={this.props.playerBPG} />
                                {/* <Averages Stat={"TO"} Average={this.props.playerTOPG} />
                                <Averages Stat={"FGA"} Average={this.props.playerFGAPG} />
                                <Averages Stat={"FGM"} Average={this.props.playerFGMPG} /> */}

                            </div>

                        </React.Fragment>
                    }

                    <div className='divider'> </div>


                </div>

            );

        }

    }
}


export default Statbox;