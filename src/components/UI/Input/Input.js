import React from 'react';

import Aux from '../../../hoc/Auxl';

const input = (props) => (
    <Aux>
        <label htmlFor={props.id}>{props.label}</label>
        <input 
            type="text" 
            id={props.id} 
            name={props.username} />
    </Aux>
);

export default input;