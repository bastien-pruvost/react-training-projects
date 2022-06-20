import React, { Component } from 'react';
import styles from './style.module.css';

class MyRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.myInput = React.createRef();
  }

  updateState = (event) => {
    this.setState({
      value: event.target.value
    });
  };

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
