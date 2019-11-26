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
      player: '',
      team: ''

    };

  }

  genericSync(event) {
    console.log("what is event.target: ", event.target)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onButtonClick(e) {

    let playerName = this.state.player
    console.log(playerName);

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
        "search": `${this.state.player} `,

      }
    })
      .then((response) => {
        console.log(response.data.data[0]) // First Result from filtered return list
        console.log(response.data.data[0].first_name) // first name of the first result from list
        console.log(response.data.data[0].last_name)

        this.setState({
          player: `${response.data.data[0].first_name} ${response.data.data[0].last_name}`,
          team: `${response.data.data[0].team.city}`

        })

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