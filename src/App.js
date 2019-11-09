import React from 'react';
import axios from 'axios';
import './App.css';
import Team from './components/team';

class App extends React.Component {

  state = {
    team: ""
  }

  render() {


    // const axios = require("axios");

    axios({
      "method": "GET",
      "url": "https://api-nba-v1.p.rapidapi.com/teams/city/miami",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4"
      }
    })
      .then((response) => {

        // To geet Team Name from API
        console.log(response.data.api.teams[0].city)

        // this.setState({
        //   team: 
        // })

      })
      .catch((error) => {
        console.log(error)
      })

    return (

      <Team />

    );

  }
}

export default App;