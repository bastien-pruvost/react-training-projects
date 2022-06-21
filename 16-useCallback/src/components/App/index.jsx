import Count from 'components/Count';
import { Component } from 'react';
import styles from './style.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Count />
      </div>
    );
  }
}

export default App;
