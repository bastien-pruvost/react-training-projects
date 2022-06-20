import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <NavLink exact activeClassName={styles.active} to='/'>
        Accueil
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/docs'>
        Docs
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/tutorial'>
        Tutorial
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/community'>
        Community
      </NavLink>
      <NavLink exact activeClassName={styles.active} to='/users'>
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
