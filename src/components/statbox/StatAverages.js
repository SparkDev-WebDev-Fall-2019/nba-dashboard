import React, { Component } from 'react';

class Stat extends Component {
    state = {}

    render() {

        const statStyles = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '1 1 auto', /* Positive flex-shrink */
            padding: '12px',
            color: 'rgb(236,239,241)',
            // border: '1px solid brown'
        };

        const statStylesHeading = {
            fontWeight: 'bold',
            marginBottom: '7px'
        };

        // console.log('AVAILABLE PLAYER AVERAGES IN STAT CARD &&****&*', this.props);
        return (

            <div style={statStyles}>

                <div style={statStylesHeading}>
                    {this.props.Stat}
                </div>

                <div>
                    {this.props.Average}
                </div>

            </div>

        );
    }
}

export default Stat;