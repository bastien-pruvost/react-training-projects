import { Component } from 'react';
import styles from './style.module.css';
import ChildrenComponent from 'components/ChildrenComponent';

class ParentComponent extends Component {
  render() {
    return (
      <div className={styles.ParentComponent}>
        <h1>Parent component</h1>
        <h2>Name: </h2>
        <h2>Age</h2>
        <ChildrenComponent />
      </div>
    );
  }
}

export default ParentComponent;
