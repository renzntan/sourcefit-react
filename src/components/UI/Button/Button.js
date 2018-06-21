import React from 'react';

import Aux from '../../../hoc/Auxl';
import classes from './Button.css';

const button = (props) => (
    <Aux>
        <button className={classes.Button} 
                type="submit">{props.text}</button>
    </Aux>
);

export default button;