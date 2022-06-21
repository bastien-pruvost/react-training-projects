import { NavLink, Outlet } from 'react-router-dom';
import styles from './style.module.css';

const Docs = () => {
  const navLinkClass = ({ isActive }) => {
    const className = '';
    return isActive ? `${className} ${styles.active}` : `${className}`;
  };

  return (
    <div className={styles.Docs}>
      <h1>You are on page "Docs"</h1>
      <hr />
      <nav>
        <NavLink to='installation' className={navLinkClass}>
          Installation
        </NavLink>
        <NavLink to='fondamentaux' className={navLinkClass}>
          Fondamentaux
        </NavLink>
        <NavLink to='hooks' className={navLinkClass}>
          Hooks
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Docs;
