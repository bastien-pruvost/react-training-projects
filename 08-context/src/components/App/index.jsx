import { Component } from 'react';
import styles from './style.module.css';
import { MyContext } from 'components/MyContext';
import ParentComponent from 'components/ParentComponent';

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
        <MyContext.Provider value={this.state.user}>
          <ParentComponent />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
