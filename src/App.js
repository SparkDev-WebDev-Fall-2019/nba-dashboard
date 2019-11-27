import React from 'react';
// import axios from 'axios';
import './App.css';

import Autocomplete from './components/AutoCompInput';
// import Team from './components/team';
// import Player from './components/player';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      allPlayers: '',
      playerName: '',
      playerTeam: ''

    };

  }

  genericSync(event) {

    // TODO WHY isn't it event.target?
    console.log("WHAT is event: ", event)
    let typedPlayerName = event;
    console.log(`USER TYPED `,typedPlayerName);

    this.setState({ playerName: typedPlayerName });

    // const { name, value } = event.target;
    // this.setState({ [name]: value });
  
  }

  getSelectedPlayersInfo(player, e) {


    // console.log(playerName);

  }

  render() {

    return (
      <div>

        <Autocomplete changePlayerNameInState= {event => this.genericSync(event)} />

        {/* <Team team={this.state.team} /> */}

        {/* <Player player={this.state.player}/> */}

      </div>

    );

  }
}

export default App;