import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const className = '';
    return isActive ? `${className} ${styles.active}` : `${className}`;
  };

  return (
    <nav className={styles.NavBar}>
      <NavLink to='/home' className={navLinkClass}>
        Accueil
      </NavLink>
      <NavLink to='/docs' className={navLinkClass}>
        Docs
      </NavLink>
      <NavLink to='/tutorial' className={navLinkClass}>
        Tutorial
      </NavLink>
      <NavLink to='/community' className={navLinkClass}>
        Community
      </NavLink>
      <NavLink to='/users' className={navLinkClass}>
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
