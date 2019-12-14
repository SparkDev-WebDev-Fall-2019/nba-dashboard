import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects(props) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        stat: ''
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {

        console.log('THE NAME OF DROPBOX SELECT',event);

        props.ChangeStatToChart({
            statForChart: name
        })

    };

    return (
        <div>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Stat
        </InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}

                    labelWidth={labelWidth}
                    // inputProps={{
                    //     name: 'stat',
                    //     id: 'outlined-age-native-simple',
                    // }}
                >
                    
                    <option value={'PPG'}>PPG</option>
                    <option value={'RPG'}>RPG</option>
                    <option value={'APG'}>APG</option>

                </Select>
            </FormControl>

        </div>
    );
}