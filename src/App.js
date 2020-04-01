/* 

TODO
1. Input validation
2. Why Is chart Not showing up?
3. After Calls are set, decide on layout
4. May store team images somehwere instead of using player headshots?
5. Add Logic to deal with missed games so players don't have 0's
6.Conditionally Render chart
7.Change Auto Complete too the suggestion instead of just adding suggestion
8. Inform user that if not ten ga,es shown, they sat out those games
9. MPg for averages keeps sayin NaN
10. If elses are not working as expected in app.js and statbox averages
11.Add Player list (player objects) for options of select

*/
import React from 'react';

// Components
import PlayerInfo from './components/PlayerInfo';

import PlayerSelect from 'react-select';
import LineChart from './components/LineChart/LineChart';
import StatboxAverages from './components/statbox/StatboxAverages';
import LastTenGames from './components/LastTenGames/LastTenGames';
import './App.css';

// API Calls
import { getPlayerByName } from './util/NBA.API'
import { getPlayerTeam } from './util/NBA.API'
import { getPlayerStats } from './util/NBA.API'
import { getAllNBAPlayers } from './util/NBA.API'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      allPlayers: [],
      searchedPlayersName: '', // Name of player input by user
      currentPlayer: {}, // Currrent Player Saved To get from data 
      currentPlayerFullName: '',
      playerTeamID: '',
      playerTeam: '',
      playerHeadshot: '',
      selectedOption: { value: '-', label: 'Type Player Name Here' },
      lastTenGamesAverages: {}

    };

  }

  componentDidMount() {

    // Retreives list of all players and sets it in state for use in auto complete
    getAllNBAPlayers.call(this)
      .then(listOfPlayers => {

        var formattedListForSelect = listOfPlayers.map(function (player) {
          return {
            value: player,
            label: player
          }
        });
        this.setState({
          allPlayers: formattedListForSelect
        })

        console.log('THE LIST :', this.state.allPlayers);

      })

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

    // Hold Values and not have to repeatedly call state after to reference data
    let stateObject = {};

    let playerFirstName = (playerName.split(" ")[0]);
    console.log('Player First Name:', playerFirstName);

    let playerLastName = (playerName.split(" ")[1]);
    console.log('Player Last Name: ', playerLastName);

    stateObject.currentPlayerFullName = playerName

    // * .call allows you to pass a 'this' value, so the function will be able to mutate state of this file, no matter where it is called from .  
    await getPlayerByName.call(this, playerFirstName, playerLastName)
      .then(foundPlayer => {

        // console.log('I AM RETURNED FROM GETPLAYER', foundPlayer);
        stateObject.currentPlayer = foundPlayer
      })

    // ***************************************************************************************

    // USES A DIFFERENT PLAYER AND TEAM ID TO GET THE PLAYER PICTURE, DON'T SAVE IN STATE

    // let { PlayerID, TeamID } = nba.getPlayerID(playerName.trim());
    // stateObject.playerHeadshot = nba.getPlayerHeadshotURL({
    //   PlayerID: PlayerID, TeamID: TeamID
    // })

    // ***************************************************************************************

    getPlayerTeam.call(this, stateObject.currentPlayer.teamId)
      .then(foundTeam => {

        stateObject.playerTeam = foundTeam

      })

    await getPlayerStats.call(this, stateObject.currentPlayer.playerId)
      .then(res => {

        // Data containing averages and stats of last 10 games
        let lastTenGamesAverages = {}

        let pointsSum = 0;
        lastTenGamesAverages.pointsArray = []

        let reboundsSum = 0;
        lastTenGamesAverages.reboundsArray = []

        let assistsSum = 0;
        lastTenGamesAverages.assistsArray = []

        let stealsSum = 0;
        lastTenGamesAverages.stealsArray = []

        let blocksSum = 0;
        lastTenGamesAverages.blocksArray = []

        let turnOversSum = 0;
        lastTenGamesAverages.turnOversArray = []

        let fgASum = 0;
        lastTenGamesAverages.fgAArray = []

        let fgMSum = 0;
        lastTenGamesAverages.fgMArray = []

        let fTASum = 0;
        lastTenGamesAverages.ftAArray = []

        let fTMSum = 0;
        lastTenGamesAverages.ftMArray = []

        lastTenGamesAverages.games = []

        // let minutesSum = 0;
        lastTenGamesAverages.minutesArray = []


        res.forEach(game => {

          // console.log(game);
          // if (game.min === "" || game.min.length === 0) {
          //   console.log("Did not play this game");
          //   console.log(game);

          // }
          // else {

          pointsSum += Number(game.points)
          lastTenGamesAverages.pointsArray.push(Number(game.points))

          reboundsSum += Number(game.defReb) + Number(game.offReb)
          lastTenGamesAverages.reboundsArray.push(Number(game.defReb) + Number(game.offReb))

          assistsSum += Number(game.assists)
          lastTenGamesAverages.assistsArray.push(Number(game.assists))

          stealsSum += Number(game.steals)
          lastTenGamesAverages.stealsArray.push(Number(game.steals))

          blocksSum += Number(game.blocks)
          lastTenGamesAverages.blocksArray.push(Number(game.blocks))

          turnOversSum += Number(game.turnovers)
          lastTenGamesAverages.turnOversArray.push(Number(game.turnovers))

          fgASum += Number(game.fga)
          lastTenGamesAverages.fgAArray.push(Number(game.fga))

          fgMSum += Number(game.fgm)
          lastTenGamesAverages.fgMArray.push(Number(game.fgm))

          fTASum += Number(game.fta)
          lastTenGamesAverages.ftAArray.push(Number(game.fta))

          fTMSum += Number(game.ftm)
          lastTenGamesAverages.ftMArray.push(Number(game.ftm))

          // Saves indivual players stats of each game , used in LastTenGames component
          lastTenGamesAverages.games.push(game)

          // minutesSum += Number(game.min)
          // lastTenGamesAverages.minutesArray.push(Number(game.min))


          // }

        });

        lastTenGamesAverages.playerPPG = pointsSum / res.length
        lastTenGamesAverages.playerRPG = reboundsSum / res.length
        lastTenGamesAverages.playerAPG = assistsSum / res.length
        lastTenGamesAverages.playerSPG = stealsSum / res.length
        lastTenGamesAverages.playerBPG = blocksSum / res.length
        lastTenGamesAverages.playerTOPG = turnOversSum / res.length

        lastTenGamesAverages.playerFGAPG = fgASum / res.length
        lastTenGamesAverages.playerFGMPG = fgMSum / res.length
        lastTenGamesAverages.FGPercent = (fgMSum / fgASum).toFixed(2)

        lastTenGamesAverages.playerFTAPG = fTASum / res.length
        lastTenGamesAverages.playerFTAMPG = fTMSum / res.length
        lastTenGamesAverages.FTPercent = (fTMSum / fTASum).toFixed(2)

        // lastTenGamesAverages.playerMPG = minutesSum / res.length

        console.log(lastTenGamesAverages);

        stateObject.lastTenGamesAverages = lastTenGamesAverages

      })

    this.setState(stateObject, () => console.log('The State', this.state))

  }

  handleChange = selectedOption => {
    this.setState({

      selectedOption: selectedOption,
      searchedPlayersName: selectedOption.value

    });
    console.log(`Option selected:`, selectedOption);
  };

  render() {

    const customStyles = {

      control: styles => ({ ...styles, backgroundColor: 'rgb(44,44,44)' }),

      // Styles for list of options 
      menuList: styles => ({ ...styles, height: 200, color: 'white', backgroundColor: 'rgb(66,66,66)' }),
      input: styles => ({ ...styles, color: 'white' })


    }

    if (!this.state.allPlayers) {
      return (<div></div>)
    } else {

      const { selectedOption } = this.state;

      return (

        <div className="body">

          <PlayerSelect
            className="player-select"
            styles={customStyles}
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.allPlayers}
          />

          <button
            className='searchStats-button'
            onClick={this.getSelectedPlayerInfo.bind(this, this.state.searchedPlayersName)}
          >
            Get Stats!
        </button>

          <PlayerInfo
            PlayerName={this.state.currentPlayerFullName}
            PlayerTeam={this.state.playerTeam}
            {...this.state.currentPlayer}
          />

          <StatboxAverages
            {...this.state.lastTenGamesAverages}

          />

          <LineChart
            {...this.state.selectedOption}
            LastTenGames={this.state.lastTenGamesAverages}

          />

          <LastTenGames
            {...this.state.lastTenGamesAverages}
          />

        </div>

      );
    }


  }
}

export default App;