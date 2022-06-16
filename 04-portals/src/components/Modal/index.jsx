import { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.popupContainer = document.createElement('div');
    document.body.appendChild(this.popupContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popupContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className={styles.Modal} onClick={this.props.handleModal}>
        <div>
          <p>
            Hello World from Modal <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sunt vitae ut quod. Doloribus facere debitis nesciunt rerum quis
            ducimus suscipit tenetur, aperiam perferendis.
          </p>
          <button>Fermer</button>
        </div>
      </div>,
      this.popupContainer
    );
  }
}

export default Modal;
