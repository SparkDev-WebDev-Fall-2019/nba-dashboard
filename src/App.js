import React from 'react';
import axios from 'axios';
import './App.css';

import Autocomplete from './components/Autocomplete';
import Team from './components/team';
import Player from './components/player';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: '',
      player: '',
      allPlayers: ''

    };

  }

  componentDidMount() {

    // Retrieve list of all players cin NBA history and save it in state
    axios({
      "method": "GET",
      "url": "https://api-nba-v1.p.rapidapi.com/players/country/USA",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4"
      }
    })
      .then((response) => {

        // Should be array of ALl players in NBA history
        console.log(response.data.api.players)
        
        this.setState({
          allPlayers: response.data.api.players
        })

      })
      .catch((error) => {
        console.log(error)
      })

  }







  genericSync(event) {
    // console.log("what is event.target: ", event.target)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onButtonClick(e) {

    let playerName = this.state.player
    console.log(playerName);


    axios({
      "method": "GET",
      "url": `https://api-nba-v1.p.rapidapi.com/players/lastName/${playerName}`,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4"
      }
    })
      .then((response) => {
        console.log('Resonse from NBA API', response)
        console.log('Resonse from NBA API', response.data)
        console.log('Resonse from NBA API', response.data.api)
        console.log('Resonse from NBA API', response.data.api.players[0])
      })
      .catch((error) => {
        console.log(error)
      })

  }

  render() {

    return (
      <div>

        {/* <Team team={this.state.team} /> */}

        {/* <Player player={this.state.player}/> */}

        <Autocomplete
          suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
        />


        <label> Type Player Name: </label>
        <input
          // value={this.state.player} // this.state.fullName
          onChange={event => this.genericSync(event)}
          type="text"
          name="player"
          placeholder="Michael Jordan"
        />

        <button onClick={() => this.onButtonClick()} />
        <Player player={this.state.player} />
        <Team team={this.state.team} />


      </div>

    );

  }
}

export default App;