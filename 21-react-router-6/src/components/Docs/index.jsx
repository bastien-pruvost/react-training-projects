import { NavLink, Outlet } from 'react-router-dom';
import styles from './style.module.css';

const Docs = () => {
  return (
    <div className={styles.Docs}>
      <h1>You are on page "Docs"</h1>
      <hr />
      <nav>
        <NavLink to='installation'>Installation</NavLink>
        <NavLink to='fondamentaux'>Fondamentaux</NavLink>
        <NavLink to='hooks'>Hooks</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Docs;
