import React from 'react';
import styles from './style.module.css';

const MyRef = React.forwardRef((props, ref) => {
  console.log(props);
  console.log(ref);

  return (
    <div className={styles.MyRef}>
      <input ref={ref} type='text' />
    </div>
  );
});

export default MyRef;
