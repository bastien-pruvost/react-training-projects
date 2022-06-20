import React from 'react';
import styles from './style.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.ErrorPage}>
      <h1>Erreur 404, la page n'a pas été trouvé</h1>
    </div>
  );
};

export default ErrorPage;
