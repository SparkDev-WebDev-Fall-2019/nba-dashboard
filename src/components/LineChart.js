// TODO
// 1. wHY ONLY ANIMATION BETWEEN RPG AND APG if both have same name?

import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Linechart extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {

            // selectedOption: this.props.StatToChart,
            lastTenGames: this.props.LastTenGames,
            selectedOption: { value: 'PPG', label: 'PTS' },

        };

    }

    statToShow(param) {
        switch (param) {

            case 'PPG':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.pointsArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.pointsArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.pointsArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.pointsArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.pointsArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.pointsArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.pointsArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.pointsArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.pointsArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.pointsArray[9],
                    }
                ];

            case 'RPG':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.reboundsArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.reboundsArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.reboundsArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.reboundsArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.reboundsArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.reboundsArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.reboundsArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.reboundsArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.reboundsArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.reboundsArray[9],
                    }
                ];

            case 'APG':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.assistsArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.assistsArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.assistsArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.assistsArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.assistsArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.assistsArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.assistsArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.assistsArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.assistsArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.assistsArray[9],
                    }
                ];

            case 'SPG':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.stealsArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.stealsArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.stealsArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.stealsArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.stealsArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.stealsArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.stealsArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.stealsArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.stealsArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.stealsArray[9],
                    }
                ];

            case 'BPG':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.blocksArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.blocksArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.blocksArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.blocksArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.blocksArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.blocksArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.blocksArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.blocksArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.blocksArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.blocksArray[9],
                    }
                ];

            case 'TOPG':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.turnOversArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.turnOversArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.turnOversArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.turnOversArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.turnOversArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.turnOversArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.turnOversArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.turnOversArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.turnOversArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.turnOversArray[9],
                    }
                ];

            case 'FGA':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.fgAArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.fgAArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.fgAArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.fgAArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.fgAArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.fgAArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.fgAArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.fgAArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.fgAArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.fgAArray[9],
                    }
                ];

            case 'FGM':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.fgMArray[0],
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.fgMArray[1],
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.fgMArray[2],
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.fgMArray[3],
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.fgMArray[4],
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.fgMArray[5],
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.fgMArray[6],
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.fgMArray[7],
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.fgMArray[8],
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.fgMArray[9],
                    }
                ];

            default:
                return 'foo';

        }
    }

    statToolTip(param) {
        switch (param) {

            case 'PPG':
                return 'Points'

            case 'RPG':
                return 'Rebounds'

            case 'APG':
                return 'Assists'

            case 'SPG':
                return 'Assists'

            case 'BPG':
                return 'Assists'

            case 'TOPG':
                return 'Assists'

            case 'FGAPG':
                return 'Assists'

            case 'FGMPG':
                return 'Assists'

            default:
                return 'foo';

        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption: selectedOption });
        console.log(`Option selected:`, selectedOption);
    };


    render() {

        const customStyles = {

            control: styles => ({ ...styles, backgroundColor: 'rgb(44,44,44)' }),

            menuList: () => ({
                // none of react-select's styles are passed to <Control />
                color: 'white',
                backgroundColor: 'rgb(66,66,66)'
            }),


        }

        const lastTenGamesContainer = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60%',
            margin: '0 auto',
            flex: '1 1 auto', /* Positive flex-shrink */
            // overflow: 'hidden',
            border: '3px solid Purple'
        };

        const options = [
            { value: 'PPG', label: 'PTS' },
            { value: 'RPG', label: 'REB' },
            { value: 'APG', label: 'AST' },
            { value: 'SPG', label: 'STL' },
            { value: 'BPG', label: 'BLK' },
            { value: 'TOPG', label: 'TO' },
            { value: 'FGA', label: 'FGA' },
            { value: 'FGM', label: 'FGM' },
        ];

        const { selectedOption } = this.state;

        // TODO If the props aren't loaded yet, don't display anything
        if (!this.props.LastTenGames.pointsArray) {
            return (<div></div>)
        } else {

            console.log('AVAILABLE PROPS IN LINE CHART', this.props);

            return (

                <div style={lastTenGamesContainer}>

                    {/* <h1 style={{ color: '#eceff1' }}> LAST TEN GAMES </h1> */}
                    <h1 className='white-styled-text'> LAST TEN GAMES </h1>

                    <div style={{ width: '100px' }}>

                        <ReactSelect

                            styles={customStyles}
                            isSearchable={false}
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />

                    </div>


                    <LineChart
                        className='styled-text'
                        width={1000}
                        height={400}
                        data={this.statToShow(this.state.selectedOption.value)}
                        margin={{
                            top: 5, right: 70, left: 70, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="stat" stroke="#8884d8" />
                        {/* <Line type="monotone" dataKey="Rebounds" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Assists" stroke="red" /> */}

                    </LineChart>


                </div>


            );

        }
    }
}
