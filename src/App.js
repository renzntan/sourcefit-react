import React, { Component } from 'react';

import classes from './App.css';
import Layout from './components/Layout/Layout';
import GithubUsersInfo from './containers/GithubUsersInfo/GithubUsersInfo';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
            <GithubUsersInfo />
        </Layout>
      </div>
    );
  }
}

export default App;
