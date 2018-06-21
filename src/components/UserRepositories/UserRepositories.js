import React from 'react';

import Aux from '../..//hoc/Auxl';
import UserRepository from './UserRepository/UserRepository';

const userRepositories = (props) => {
    const repos = props.repos.map(repo => {
        return <UserRepository 
                    key={repo.id}
                    repo={repo}/>
    });

    return (
        <Aux>
           {repos}
        </Aux>
    )
};

export default userRepositories;