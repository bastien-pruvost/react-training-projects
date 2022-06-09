// Import styles
import { Component } from 'react';
import styles from './style.module.css';

class MyComponent extends Component {
  render() {
    return (
      <div className={styles.app}>
        <p>Hello from MyComponent</p>
      </div>
    );
  }
}

export default MyComponent;
