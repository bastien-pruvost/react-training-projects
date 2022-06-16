import { Component } from 'react';
import styles from './style.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={styles.Modal}>
        <div>
          <p>
            Hello World from Modal <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sunt vitae ut quod. Doloribus facere debitis nesciunt rerum quis
            ducimus suscipit tenetur, aperiam perferendis.
          </p>
          <button>Fermer</button>
        </div>
      </div>
    );
  }
}

export default Modal;
