import React from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const userInput = (props) => (
    <form onSubmit={props.uponSubmit}>
        <Input 
            id="username" 
            name="username" 
            label="User Name: "
            value={props.userInputValue}/>
        <Button text="Load Repo"/>
    </form> 
);

export default userInput;