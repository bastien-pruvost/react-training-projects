import React from 'react';
import styles from './style.module.css';

const Tutorial = (props) => {
  setTimeout(() => {
    props.history.push('/');
  }, 5000);

  return (
    <div className={styles.Tutorial}>
      <h1 style={{ color: 'orange' }}>
        This page is under construction. You will be redirected to the homepage
        in 5 seconds
      </h1>
    </div>
  );
};

export default Tutorial;
