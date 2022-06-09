import { Component } from 'react';
import styles from './style.module.css';
import MyComponent from '../MyComponent';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <p>Hello from App Component</p>
        <MyComponent />
      </div>
    );
  }
}

export default App;
