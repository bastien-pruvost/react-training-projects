import { ColorContext, UserContext } from 'components/MyContext';
import { useContext } from 'react';
import styles from './style.module.css';

const ChildrenComponent = () => {
  const color = useContext(ColorContext);
  const user = useContext(UserContext);

  return (
    <div className={styles.ChildrenComponent} style={{ color: color }}>
      <h1>Children component</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
};

export default ChildrenComponent;
