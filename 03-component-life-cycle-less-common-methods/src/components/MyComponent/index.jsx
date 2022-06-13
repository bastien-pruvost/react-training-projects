import { Component } from 'react';
import styles from './style.module.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'SpiderMan'
    };

    console.log('Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');

    console.log(props);
    console.log(state);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  toggleForceUpdate = () => {
    console.log('Force Update');
    this.forceUpdate(() => {});
  };

  render() {
    console.log('Render');
    return (
      <div className={styles.MyComponent}>
        <p>
          <strong>Nom: </strong>
          {this.state.name}
        </p>
        <p>
          <strong>Age: </strong>
          {this.props.age}
        </p>
        <button onClick={this.toggleForceUpdate}>Force Update</button>
      </div>
    );
  }
}

export default MyComponent;
