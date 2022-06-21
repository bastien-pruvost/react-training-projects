import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Tutorial = (props) => {
  const navigate = useNavigate();

  const returnHome = setTimeout(() => {
    navigate('/home');
  }, 5000);

  useEffect(() => {
    return () => {
      clearTimeout(returnHome);
    };
  }, [returnHome]);

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
