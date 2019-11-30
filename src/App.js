import React from 'react';
import axios from 'axios';
import Autocomplete from './components/AutoCompInput';

import './App.css';

import { getPlayerByName } from './API CALLLS/NBA.API'

const nba = require('nba-api-client');
// import Team from './components/team';
// import Player from './components/player';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      allPlayers: '', // List of players from api
      searchedPlayersName: '', // Name of player input by user
      currentPlayer: {}, // Currrent Player Saved To get from data 
      currentPlayerFullName: 'james harden',
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
  getSelectedPlayer(playerName, e) {

    console.log('USER ENTERED PLAYER:', playerName);

    this.setState({
      currentPlayerFullName: playerName
    })

    // Get Firts Name Of Player
    let playerFirstName = (playerName.split(" ")[0]);
    console.log('Player First Name:', playerFirstName);

    // Get Last Name Of Player
    let playerLastName = (playerName.split(" ")[1]);
    console.log('Player Last Name: ', playerLastName);

    // Funtion Returns Plaer with this First and Last Name
    getPlayerByName(playerFirstName,playerLastName);    

  }

  getPlayerTeam(teamID) {

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

  // getPlayerTeam(teamID) {
  // * Recives @playerName and returns link to their headshot image
  // getPlayerHeadshot(playerName) {

  //   console.log('Player Name in Headshot function:', this.state.currentPlayerFullName);

  //   // DESTRUCTURE TO GET PLAYER ID FROM OBJECT RETURNED FROM API
  //   let { PlayerID, TeamID } = nba.getPlayerID(playerName);
  //   console.log(`PlayerID: ${PlayerID} TeamID: ${TeamID}`);

  //   // Call to api requires player AND team id
  //   let pic = nba.getPlayerHeadshotURL({ PlayerID: PlayerID, TeamID: TeamID })

  //   console.log(pic);
  //   this.setState({
  //     playerHeadshot: nba.getPlayerHeadshotURL({ PlayerID: PlayerID, TeamID: TeamID })
  //   })

  // }

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

    // // DESTRUCTURE TO GET PLAYER ID FROM OBJECT RETURNED FROM API
    // let { PlayerID, TeamID } = nba.getPlayerID(this.state.currentPlayerFullName);
    // console.log(`PlayerID: ${PlayerID} TeamID: ${TeamID}`);

    // // Call to api requires player AND team id
    // let pic = nba.getPlayerHeadshotURL({ PlayerID: PlayerID, TeamID: TeamID })

    // console.log(pic);
    // this.setState({
    //   playerHeadshot: nba.getPlayerHeadshotURL({ PlayerID: PlayerID, TeamID: TeamID })
    // })


    return (

      <div>

        <img src={this.state.playerHeadshot} alt='Player Pic' />

        <Autocomplete changePlayerNameInState={event => this.genericSync(event)} />

        <button
          // onClick={(e) => { this.getSelectedPlayer(e, this.state.playerName) }}
          onClick={this.getSelectedPlayer.bind(this, this.state.searchedPlayersName)}
        >
          Click Me!
        </button>



        {/* <Team team={this.state.team} /> */}

        {/* <Player player={this.state.player}/> */}

      </div>

    );

  }
}

export default App;