import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './style.module.css';
import Docs from 'components/Docs';
import Tutorial from 'components/Tutorial';
import Community from 'components/Community';
import NavBar from 'components/NavBar';
import ErrorPage from 'components/ErrorPage';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={() => <h1>Accueil</h1>} />
          <Route exact path='/Docs' component={Docs} />
          <Route exact path='/tutorial' component={Tutorial} />
          <Route exact path='/community' component={Community} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
