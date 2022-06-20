import styles from './style.module.css';
import { MyContext } from 'components/MyContext';

const ChildrenComponent = () => {
  return (
    <MyContext.Consumer>
      {(data) => {
        return (
          <div className={styles.ChildrenComponent}>
            <h1>
              You are {data.name} & you have {data.age}
            </h1>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default ChildrenComponent;
