import React, { Component } from 'react';

class LastTenGames extends Component {
    state = {

    }
    render() {

        const header = {
            fontFamily: "Rajdhani",
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: "center",
            color: '#eceff1'
        };

        //? If the props aren't loaded yet, don't display anything
        if (!this.props.games) {
            return (<div> </div>)
        }
        else {

            console.log(' PLAYER STATS IN LAST 10 GAMES', this.props.games);

            const statRows = this.props.games.map((game) => {

                return <tr key={game.gameId}>

                    <td>{game.min}</td>
                    <td>{game.fgm}</td>
                    <td>{game.fga}</td>
                    <td>{game.fgp}</td>
                    <td>{game.ftm}</td>
                    <td>{game.fta}</td>
                    <td>{game.ftp}</td>
                    <td>{game.offReb}</td>
                    <td>{game.defReb}</td>
                    <td>{game.totReb}</td>
                    <td>{game.assists}</td>
                    <td>{game.steals}</td>
                    <td>{game.blocks}</td>
                    <td>{game.turnovers}</td>
                    <td>{game.pFouls}</td>
                    <td>{game.points}</td>

                </tr>

            })

            return (

                <React.Fragment>

                    <h1 style={header}> Last Ten Games </h1>

                    <div className="table-container">

                        <table>

                            <thead>

                                <tr>

                                    <th>MIN</th>
                                    <th>FGM</th>
                                    <th>FGA</th>
                                    <th>FG%</th>
                                    <th>FTM</th>
                                    <th>FTA</th>
                                    <th>FT%</th>
                                    <th>OREB</th>
                                    <th>DREB</th>
                                    <th>REB</th>
                                    <th>AST</th>
                                    <th>STL</th>
                                    <th>BLK</th>
                                    <th>TO</th>
                                    <th>PF</th>
                                    <th>PTS</th>

                                </tr>

                            </thead>

                            <tbody>

                                {statRows}

                            </tbody>

                        </table>


                    </div>


                </React.Fragment>

            );

        }

    }
}



export default LastTenGames;