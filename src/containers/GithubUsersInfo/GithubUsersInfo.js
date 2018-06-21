import React, {Component} from 'react';

import Aux from '../../hoc/Auxl';
import UserRepositories from '../../components/UserRepositories/UserRepositories';
import axiosGithub from '../../axiosGitHub';
import Loading from '../../components/UI/Loading/Loading';

class GithubUsersInfo extends Component {
    state = {
        loading: false,
        userInputValue: '',
        repos: []
    }

    onClickLoadRepositories = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        axiosGithub.get(`users/${this.state.userInputValue}/repos?type=all&sort=updated`)
            .then(res=> {
                this.setState({repos: res.data, loading: false});
            });
    }

    handleInputChange = (e) => {
        this.setState({userInputValue: e.target.value});
    }

    render() {
        let repositories = <Loading />;

        if (!this.state.loading) {
            repositories = <UserRepositories repos={this.state.repos}/>
        }

        return (
            <Aux>
                <div>
                    <form onSubmit={(e) => this.onClickLoadRepositories(e)}>
                        <label htmlFor="username">Username: </label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            onChange={this.handleInputChange.bind(this)}/>
                        <button type="submit">Load Repo</button>
                    </form>
                </div>
                <div>
                   {repositories}                    
                </div>
            </Aux>
        );
    }
}

export default GithubUsersInfo;