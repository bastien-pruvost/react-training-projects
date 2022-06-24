import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './style.module.css';
import NavBar from 'components/NavBar';
import Docs from 'components/Docs';
import Tutorial from 'components/Tutorial';
import Community from 'components/Community';
import SearchUsers from 'components/SearchUsers';
import Users from 'components/Users';
import Profile from 'components/Profile';
import ErrorPage from 'components/ErrorPage';

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<h1>Accueil</h1>} />
        <Route path='/docs' element={<Docs />}>
          <Route index element={<Navigate to='installation' />} />
          <Route path='installation' element={<h1>Installation</h1>} />
          <Route path='fondamentaux' element={<h1>Fondamentaux</h1>} />
          <Route path='hooks' element={<h1>Hooks</h1>} />
        </Route>
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/community' element={<Community />} />
        <Route path='/search' element={<SearchUsers />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:profileId' element={<Profile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
