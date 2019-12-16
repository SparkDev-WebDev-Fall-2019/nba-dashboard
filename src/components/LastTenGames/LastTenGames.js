import React, { Component } from 'react';
import Game from './Game';

class LastTenGames extends Component {
    state = {

    }
    render() {

        const statLabels = {
            display: 'flex',
            flexWrap: 'noWrap',
            justifyContent: 'space-around',
            padding: '0 15px',
            border: '1px solid yellow'
        };

        const lastTenGamesStatsContainer = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'noWrap',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 15px',
            border: '1px solid blue'
        };

        const boxScore = {
            // display: 'flex',
            // flexWrap: 'noWrap',
            width: '60%',
            // margin: '0 auto',
            // padding: '0 15px',
            border: '1px solid blue'
        };

        const statLabel = {
            width: '5px',
            margin: '0 15px'
            // border: '1px solid purple'
        };

        // TODO If the props aren't loaded yet, don't display anything
        if (!this.props.games) {
            return (<div> Not loaded yet</div>)
        }
        else {

            console.log('AVAILABLE PLAYER STATS IN LAST 10 GAMES', this.props.games[0]);

            return (

                <div style={lastTenGamesStatsContainer} >

                    <h1> Last Ten Games </h1>

                    <div style={boxScore}>

                        <div style={statLabels}>

                            <div style={statLabel}> MIN </div>
                            <div style={statLabel}> FGM </div>
                            <div style={statLabel}> FGA </div>
                            <div style={statLabel}> FG% </div>
                            <div style={statLabel}> FTM </div>
                            <div style={statLabel}> FTA </div>
                            <div style={statLabel}> FT% </div>
                            <div style={statLabel}> OREB </div>
                            <div style={statLabel}> DREB </div>
                            <div style={statLabel}> REB </div>
                            <div style={statLabel}> AST </div>
                            <div style={statLabel}> STL </div>
                            <div style={statLabel}> BLK </div>
                            <div style={statLabel}> TO </div>
                            <div style={statLabel}> PF </div>
                            <div style={statLabel}> PTS </div>

                        </div>

                        <Game {...this.props.games[0]} />
                        <Game {...this.props.games[1]} />
                        <Game {...this.props.games[2]} />
                        <Game {...this.props.games[3]} />
                        <Game {...this.props.games[4]} />
                        <Game {...this.props.games[5]} />
                        <Game {...this.props.games[6]} />
                        <Game {...this.props.games[7]} />
                        <Game {...this.props.games[8]} />
                        <Game {...this.props.games[9]} />

                    </div>

                </div>
            );

        }

    }
}



export default LastTenGames;