import React from 'react';
import axios from 'axios';
import './App.css';
import Team from './components/team';
import Player from './components/player';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: '',
      player: ''

    };

  }

  genericSync(event) {
    console.log("what is event.target: ", event.target)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onButtonClick(e) {

    let playerName = this.state.player

    axios({
      "method": "GET",
      "url": "https://free-nba.p.rapidapi.com/players",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4"
      },
      "params": {
        "page": "0",
        "per_page": "25",
        "search": `lebron` // TODO WHY CANT I PASS A PROP/STATE HERE //Returns players with provided name in their name (Not case sensative)
      }
    })
      .then((response) => {
        console.log(response.data.data[0]) // First Result from filtered return list
        console.log(response.data.data[0].first_name) 
        console.log(response.data.data[0].last_name) 

        this.setState({
          player: `${response.data.data[0].first_name} ${response.data.data[0].last_name}` 
        })

      })
      .catch((error) => {
        console.log(error)
      })

  }

  render() {


    let player = <Player player={this.state.player} />

    return (
      <div>

        {/* <Team team={this.state.team} /> */}

        {/* <Player player={this.state.player}/> */}

          <label> Type Player Name: </label>
          <input
            // value={this.state.player} // this.state.fullName
            onChange={event => this.genericSync(event)}
            type="text"
            name="player"
          placeholder="Michael Jordan"
          />

          <button onClick={() => this.onButtonClick()} />
          {player}


      </div>

    );

  }
}

export default App;