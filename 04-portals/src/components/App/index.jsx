import { Component } from 'react';
import styles from './style.module.css';
import MyComponent from 'components/MyComponent';

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
        <p>Je suis dans root</p>
        <MyComponent />
      </div>
    );
  }
}

export default App;
