import { PureComponent } from 'react';
import styles from './style.module.css';

class MyComponent extends PureComponent {
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

  changeStateToBatman = () => {
    this.setState({
      name: 'BatMan'
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');

  //   if (this.state.name !== nextState.name || this.props.age !== nextProps.age)
  //     return true;

  //   return false;
  // }

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
        <button onClick={this.changeStateToBatman}>
          Change State To Batman
        </button>
        <p>
          <br />
        </p>
        <button onClick={this.toggleForceUpdate}>Force Update</button>
      </div>
    );
  }
}

export default MyComponent;
