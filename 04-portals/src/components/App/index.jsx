import { Component } from 'react';
import styles from './style.module.css';
import Modal from 'components/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  handleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const modal = !!this.state.showModal && (
      <Modal handleModal={this.handleModal} />
    );

    return (
      <div className={styles.App}>
        <p>Je suis dans App</p>
        <button onClick={this.handleModal}>Afficher la modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
