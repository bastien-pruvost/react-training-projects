import { Component } from 'react';
import styles from './style.module.css';
import ChildrenComponent from 'components/ChildrenComponent';
import { MyContext } from 'components/MyContext';

class ParentComponent extends Component {
  render() {
    const value = this.context;

    return (
      <div className={styles.ParentComponent}>
        <ChildrenComponent />
        <h2>{this.context.name}</h2>
        <h2>{this.context.age}</h2>
      </div>
    );
  }
}

ParentComponent.contextType = MyContext;

export default ParentComponent;
