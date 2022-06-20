import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './style.module.css';
import Docs from 'components/Docs';
import Tutorial from 'components/Tutorial';
import Community from 'components/Community';
import NavBar from 'components/NavBar';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/Docs' component={Docs} />
        <Route exact path='/tutorial' component={Tutorial} />
        <Route exact path='/community' component={Community} />
      </BrowserRouter>
    </div>
  );
}

export default App;
