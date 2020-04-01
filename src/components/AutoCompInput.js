import React from 'react';
import TextInput from 'react-autocomplete-input';

import { getAllNBAPlayers } from '../util/NBA.API'

import 'react-autocomplete-input/dist/bundle.css';



class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allPlayers: []
        };

    }

    componentDidMount() {

        // Retreives list of all players and sets it in state for use in auto complete
        getAllNBAPlayers.call(this);

    }



    render() {

        return (

            <div>

                <TextInput
                    name="playerName"
                    onChange={this.props.changePlayerNameInState}
                    options={this.state.allPlayers}
                    trigger=''
                    maxOptions={10}
                    matchAny={true}
                
                />

                {/* <button onClick={this.props.selectedPlayer}></button> */}

            </div>

        );

    }
}

export default Autocomplete;