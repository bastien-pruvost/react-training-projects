import { Component } from 'react';
import styles from './style.module.css';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    age: 27
  };

  render() {
    return (
      <div className={styles.App}>
        <p>Je suis dans App</p>
        <button>Afficher la modal</button>
        <Modal />
      </div>
    );
  }
}

export default App;
