import { Component } from 'react';
import styles from './style.module.css';
import MyComponent from '../MyComponent';

class App extends Component {
  state = {
    age: 27
  };

  addOneYear = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
    }));
  };

  render() {
    return (
      <div className={styles.App}>
        <MyComponent age={this.state.age} />
        <button onClick={this.addOneYear}>Change props</button>
      </div>
    );
  }
}

export default App;
