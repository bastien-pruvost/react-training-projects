import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink to='/'>Accueil</NavLink>
      <NavLink to='/survey'>Questionnaire</NavLink>
    </nav>
  );
}

export default Header;
