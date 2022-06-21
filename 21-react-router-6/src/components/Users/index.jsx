import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const Users = () => {
  const navLinkClass = ({ isActive }) => {
    const className = '';
    return isActive ? `${className} ${styles.active}` : `${className}`;
  };

  return (
    <div className={styles.Users}>
      <NavLink to='/users/0' className={navLinkClass}>
        User 1
      </NavLink>
      <NavLink to='/users/1' className={navLinkClass}>
        User 2
      </NavLink>
      <NavLink to='/users/2' className={navLinkClass}>
        User 3
      </NavLink>
      <NavLink to='/users/3' className={navLinkClass}>
        User 4
      </NavLink>
      <NavLink to='/users/4' className={navLinkClass}>
        User 5
      </NavLink>
      <NavLink to='/users/5' className={navLinkClass}>
        User 6
      </NavLink>
      <NavLink to='/users/6' className={navLinkClass}>
        User 7
      </NavLink>
      <NavLink to='/users/7' className={navLinkClass}>
        User 8
      </NavLink>
      <NavLink to='/users/8' className={navLinkClass}>
        User 9
      </NavLink>
      <NavLink to='/users/9' className={navLinkClass}>
        User 10
      </NavLink>
    </div>
  );
};

export default Users;
