import React, { Fragment } from 'react';

import Select, { components } from 'react-select';

const Menu = props => {
    const optionsLength = getLength(props.options);
    return (
        <Fragment>
            <div style={menuHeaderStyle}>
                Custom Menu with {optionsLength} options
        </div>
            <components.Menu {...props}>{props.children}</components.Menu>
        </Fragment>
    );
};

export default () => (
    <Select
        defaultValue={colourOptions[1]}
        options={groupedOptions}
        components={{ Menu }}
    />
);