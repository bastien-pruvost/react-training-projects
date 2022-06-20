import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './style.module.css';
import NavBar from 'components/NavBar';
import Docs from 'components/Docs';
import Tutorial from 'components/Tutorial';
import Community from 'components/Community';
import Profile from 'components/Profile';
import Users from 'components/Users';
import ErrorPage from 'components/ErrorPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      underConstruction: {
        Docs: false,
        Tutorial: true,
        Community: false
      }
    };
  }

  render() {
    return (
      <div className={styles.App}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={() => <h1>Accueil</h1>} />
            <Route exact path='/Docs' component={Docs} />
            <Route exact path='/tutorial' component={Tutorial} />
            <Route exact path='/community' component={Community} />
            <Route exact path='/users/' component={Users} />
            {/* <Route exact path='/users/:profileId' component={Profile} /> */}
            <Route
              exact
              path='/users/:profileId'
              render={(props) => (
                <Profile key={props.match.params.profileId} {...props} />
              )}
            />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
