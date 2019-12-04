/* TODO
1. Input validation
2. Why Is chart Not showing up?
3. After Calls are set, decide on layout
4. May store team images somehwere instead of using player headshots?
*/

// Packages
import React from 'react';


// Components
import Autocomplete from './components/AutoCompInput';
import Team from './components/Team';
import Player from './components/Player';
import Statbox from './components/Statbox';
import AreaChart from './components/AreaChart';


import './App.css';

import { getPlayerByName } from './API CALLLS/NBA.API'
import { getPlayerTeam } from './API CALLLS/NBA.API'
import { getPlayerStats } from './API CALLLS/NBA.API'

const nba = require('nba-api-client');
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      searchedPlayersName: '', // Name of player input by user
      currentPlayer: {}, // Currrent Player Saved To get from data 
      currentPlayerFullName: '',
      playerTeamID: '',
      playerTeam: '',
      playerHeadshot: '',
      playerPPG: 0,
      playerRPG: 0,
      playerAPG: 0,

    };



  }

  // * Get User Input
  genericSync(event) {

    // TODO WHY isn't it event.target?
    // console.log("WHAT is event: ", event)

    let typedPlayerName = event;
    // console.log(`USER TYPED `, typedPlayerName);

    this.setState({ searchedPlayersName: typedPlayerName });

  }

  async getSelectedPlayerInfo(playerName, e) {

    // To Hold Values and not have to repeatedly call state after to reference data
    let stateObject = {};

    let playerFirstName = (playerName.split(" ")[0]);
    console.log('Player First Name:', playerFirstName);

    let playerLastName = (playerName.split(" ")[1]);
    console.log('Player Last Name: ', playerLastName);

    stateObject.currentPlayerFullName = playerName

    // * .call allows you to pass a 'this' value, so the function will be able to mutate state of this file, no matter where it is called from .  
    await getPlayerByName.call(this, playerFirstName, playerLastName)
      .then(foundPlayer => {

        console.log('I AM RETURNED FROM GETPLAYER', foundPlayer);
        stateObject.currentPlayer = foundPlayer
      })

    // ***************************************************************************************

    // USES A DIFFERENT PLAYER AND TEAM ID TO GET THE PLAYER PICTURE, DON'T SAVE IN STATE

    let { PlayerID, TeamID } = nba.getPlayerID(playerName.trim());
    stateObject.playerHeadshot = nba.getPlayerHeadshotURL({
      PlayerID: PlayerID, TeamID: TeamID
    })

    // ***************************************************************************************

    getPlayerTeam.call(this, stateObject.currentPlayer.teamId)
      .then(foundTeam => {

        stateObject.playerTeam = foundTeam

        console.log(`THE PLAYERS TEAM`, foundTeam);

        console.log(this.state);

      })

    await getPlayerStats.call(this, stateObject.currentPlayer.playerId)
      .then(lastTenGames => {

        console.log(lastTenGames);
        let pointsSum = 0;
        let reboundsSum = 0;
        let assistsSum = 0;

        lastTenGames.forEach(game => {
          pointsSum += Number(game.points)
          reboundsSum += Number(game.defReb) + Number(game.offReb)
          assistsSum += Number(game.assists)
        });

        stateObject.playerPPG = pointsSum / lastTenGames.length
        stateObject.playerRPG = reboundsSum / lastTenGames.length
        stateObject.playerAPG = assistsSum / lastTenGames.length

      })


    this.setState(stateObject)

  }

  render() {

    
    return (

      <div>

        <img src={this.state.playerHeadshot} alt='Player Pic' />

        <Autocomplete changePlayerNameInState={event => this.genericSync(event)} />

        <button
          // onClick={(e) => { this.getSelectedPlayerInfo(e, this.state.playerName) }}
          onClick={this.getSelectedPlayerInfo.bind(this, this.state.searchedPlayersName)}
        >
          Click Me!
        </button>

        <Team Team={this.state.playerTeam} />

        <Player Player={this.state.currentPlayerFullName} />

        <Statbox
          PPG={this.state.playerPPG}
          RPG={this.state.playerRPG}
          APG={this.state.playerAPG}
        />

      {/* TODO WHY IS IT NOT SHOWING */}
        <AreaChart/>

      </div>

    );

  }
}

export default App;