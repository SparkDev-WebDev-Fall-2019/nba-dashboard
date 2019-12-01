// Packages
import React from 'react';
import axios from 'axios';

// Components
import Autocomplete from './components/AutoCompInput';
import Team from './components/team';
// import Player from './components/player';

import './App.css';

import { getPlayerByName } from './API CALLLS/NBA.API'
import { getPlayerTeam } from './API CALLLS/NBA.API'

const nba = require('nba-api-client');
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      allPlayers: '', // List of players from api
      searchedPlayersName: '', // Name of player input by user
      currentPlayer: {}, // Currrent Player Saved To get from data 
      currentPlayerFullName: '',
      playerTeamID: '',
      playerTeam: '',
      playerHeadshot: ''

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

  // * Recives a player object and saves it in state
  async getSelectedPlayerInfo(playerName, e) {

    // console.log(`USER ENTERED PLAYER: ${playerName}`);

    this.setState({
      currentPlayerFullName: playerName
    })

    // Get Firts Name Of Player
    let playerFirstName = (playerName.split(" ")[0]);
    console.log('Player First Name:', playerFirstName);

    // Get Last Name Of Player
    let playerLastName = (playerName.split(" ")[1]);
    console.log('Player Last Name: ', playerLastName);

    // * .call allows us to pass a 'this' value, so the function will be able to mutate state of this file, no matter where it is called from .  

    // @getPlayerByName Uses first and last name to find player and saves player in state
    await getPlayerByName.call(this, playerFirstName, playerLastName)

    // With Player Saved In State, use his team ID to find his team
    console.log(`THIS IS THE TEAM ID FRROM PLAYER IN STATE PROPERTY: `, this.state.currentPlayer.teamId);

    await getPlayerTeam.call(this,this.state.currentPlayer.teamId)


    // ***************************************************************************************
    // USES A DIFFERENT PLAYER AND EAM ID TO GET THE PLAYER PICTURE, DON'T SAVE IN STATE

    let { PlayerID, TeamID } = nba.getPlayerID(playerName.trim());
    console.log(`ID'S for picture: PlayerID: ${PlayerID} TeamID: ${TeamID}`);

    // ***************************************************************************************

    // Call to api requires player AND team id, then save image in state
    this.setState({
      playerHeadshot: nba.getPlayerHeadshotURL({ PlayerID: PlayerID, TeamID: TeamID })
    })

  }

  getPlayerTeam(teamID) {

    // Using a provided players teamID, get their current team and save to state
    getPlayerTeam.call(this, teamID)
    console.log(`PLAYER PLAYS FOR : ${this.state.playerTeam}`);

  }

  getPlayerStats(teamID) {

    // Using a provided players teamID, get their current team
    axios({
      "method": "GET",
      "url": `https://api-nba-v1.p.rapidapi.com/teams/teamId/${teamID}`,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4"
      }
    })
      .then((response) => {

        // Make sure it's data we want
        console.log(response.data.api.teams[0].fullName)

        this.setState({
          playerTeam: response.data.api.teams[0].fullName
        })

      })
      .catch((error) => {
        console.log(error)
      })

  }

  render() {


    return (

      <div>

        <img src={this.state.playerHeadshot} alt='Player Pic' />
        {/* <img src={pic} alt='Player Pic' /> */}

        <Autocomplete changePlayerNameInState={event => this.genericSync(event)} />

        <button
          // onClick={(e) => { this.getSelectedPlayerInfo(e, this.state.playerName) }}
          onClick={this.getSelectedPlayerInfo.bind(this, this.state.searchedPlayersName)}
        >
          Click Me!
        </button>



        <Team team={this.state.playerTeam} />

        {/* <Player player={this.state.player}/> */}

      </div>

    );

  }
}

export default App;