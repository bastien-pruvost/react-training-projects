import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const Users = () => {
  return (
    <div className={styles.Users}>
      <NavLink exact activeClassName={styles.active} to='/users/0'>
        User 1
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/1'>
        User 2
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/2'>
        User 3
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/3'>
        User 4
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/4'>
        User 5
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/5'>
        User 6
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/6'>
        User 7
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/7'>
        User 8
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/8'>
        User 9
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users/9'>
        User 10
      </NavLink>
    </div>
  );
};

export default Users;
