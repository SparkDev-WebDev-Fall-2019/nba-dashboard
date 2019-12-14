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
            selectedOption: { value: 'PPG', label: 'PPG' },

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
                        name: 'Game 1', stat: this.props.LastTenGames.reboundsArray[0], amt: 2400,
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.reboundsArray[1], amt: 2210,
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.reboundsArray[2], amt: 2290,
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.reboundsArray[3], amt: 2000,
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.reboundsArray[4], amt: 2181,
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.reboundsArray[5], amt: 2500,
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.reboundsArray[6], amt: 2100,
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.reboundsArray[7], amt: 2100,
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.reboundsArray[8], amt: 2100,
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.reboundsArray[9], amt: 2100,
                    }
                ];

            case 'APG':
                return [
                    {
                        name: 'Game 1', stat: this.props.LastTenGames.assistsArray[0], amt: 2400,
                    },
                    {
                        name: 'Game 2', stat: this.props.LastTenGames.assistsArray[1], amt: 2210,
                    },
                    {
                        name: 'Game 3', stat: this.props.LastTenGames.assistsArray[2], amt: 2290,
                    },
                    {
                        name: 'Game 4', stat: this.props.LastTenGames.assistsArray[3], amt: 2000,
                    },
                    {
                        name: 'Game 5', stat: this.props.LastTenGames.assistsArray[4], amt: 2181,
                    },
                    {
                        name: 'Game 6', stat: this.props.LastTenGames.assistsArray[5], amt: 2500,
                    },
                    {
                        name: 'Game 7', stat: this.props.LastTenGames.assistsArray[6], amt: 2100,
                    },
                    {
                        name: 'Game 8', stat: this.props.LastTenGames.assistsArray[7], amt: 2100,
                    },
                    {
                        name: 'Game 9', stat: this.props.LastTenGames.assistsArray[8], amt: 2100,
                    },
                    {
                        name: 'Game X', stat: this.props.LastTenGames.assistsArray[9], amt: 2100,
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

            default:
                return 'foo';

        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption: selectedOption });
        console.log(`Option selected:`, selectedOption);
    };


    render() {

        const options = [
            { value: 'PPG', label: 'PPG' },
            { value: 'RPG', label: 'RPG' },
            { value: 'APG', label: 'APG' },
        ];

        const { selectedOption } = this.state;

        // TODO If the props aren't loaded yet, don't display anything
        if (!this.props.LastTenGames.pointsArray) {
            return (<div></div>)
        } else {

            console.log('AVAILABLE PROPS IN LINE CHART', this.props);

            return (

                <div>

                    <h1> LAST TEN </h1>

                    <ReactSelect
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />

                    <LineChart
                        width={700}
                        height={300}
                        data={this.statToShow(this.state.selectedOption.value)}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
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
