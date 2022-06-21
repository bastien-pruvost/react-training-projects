import { Component } from 'react';
import styles from './style.module.css';
import ParentComponent from 'components/ParentComponent';
import { UserContext, ColorContext } from 'components/MyContext';

class App extends Component {
  state = {
    user: {
      name: 'Bastien',
      age: 24
    }
  };

  render() {
    return (
      <div className={styles.App}>
        <UserContext.Provider value={this.state.user}>
          <ParentComponent />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
