import React from 'react';
import axios from 'axios';
import './App.css';

import Autocomplete from './components/AutoCompInput';

// import Team from './components/team';
// import Player from './components/player';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      allPlayers: '', // List of players from api
      searchedPlayersName: '', // Name of player input by user
      currentPlayer: {}, // Currrent Player being used to get data 
      playerTeam: ''

    };

  }

  genericSync(event) {

    // TODO WHY isn't it event.target?
    // console.log("WHAT is event: ", event)
    let typedPlayerName = event;
    // console.log(`USER TYPED `, typedPlayerName);

    this.setState({ searchedPlayersName: typedPlayerName });

  }

  getSelectedPlayer(player, e) {

    console.log('SELECTED PLAYERS : ', player);

    // Get Firts Name Of Player
    let playerFirstName = (player.split(" ")[0]);
    console.log('Player First Name: ', playerFirstName);

    // Get Last Name Of Player
    let playerLastName = (player.split(" ")[1]);
    console.log('Player Last Name: ', playerLastName);

    axios({
      "method": "GET",
      "url": `https://api-nba-v1.p.rapidapi.com/players/firstName/${playerFirstName}`,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4"
      }
    })
      .then((playerList) => {

        console.log('PLAYERS WITH THIS FIRST NAME');
        console.log(playerList.data.api.players)

        console.log('ABOUT TO GET PLAYERS WITH THIS FIRST NAME AND LAST NAME');
        var result = playerList.data.api.players.filter(players => {
          return players.lastName === playerLastName;
        })
        console.log('RESULT OF FINDING LAST NAME: ', result);
        console.log(`THE PLAYER WITH THIS FULL NAME `, result[0]);

        // Now have a named variable for the player object so we can use it to get data
        this.setState({
          currentPlayer: result[0]
        })

        console.log(this.state.currentPlayer.country);
        console.log(this.state.currentPlayer.dateOfBirth);

        this.getPlayerTeam(this.state.currentPlayer.teamId)


      })
      .catch((error) => {
        console.log(error)
      })

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