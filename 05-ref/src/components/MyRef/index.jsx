import React, { Component } from 'react';
import styles from './style.module.css';

class MyRef extends Component {
  constructor(props) {
    super(props);

    this.myInput = React.createRef();
  }

  addFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <div className={styles.MyRef}>
        <input ref={this.myInput} type='text' />
      </div>
    );
  }
}

export default MyRef;
