import React, { Component } from 'react';
import styles from './style.module.css';
import MyRef from 'components/MyRef';

class App extends Component {
  constructor(props) {
    super(props);

    this.refComponent = React.createRef();
  }

  handleClick = () => {
    console.log(this.refComponent.current.focus());
  };

  render() {
    return (
      <div className={styles.App}>
        <MyRef name='Toto' ref={this.refComponent} />
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default App;
