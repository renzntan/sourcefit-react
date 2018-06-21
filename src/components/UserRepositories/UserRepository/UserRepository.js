import React from 'react';

import classes from './UserRepository.css';

const userRepository = (props) => (
    <a target="_blank" href={props.repo.html_url} className={classes.Repository}>
       <h3>{props.repo.name}</h3>
    </a>
);

export default userRepository;

