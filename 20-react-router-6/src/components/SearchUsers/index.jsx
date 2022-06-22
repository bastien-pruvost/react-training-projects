import styles from './style.module.css';
import { useSearchParams } from 'react-router-dom';

function SearchUsers() {
  const users = ['roger', 'stan', 'francine', 'steve', 'hayley', 'klaus'];

  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('name') || ''; // http://localhost:3000/search?name=

  const handleSearch = (e) => {
    const name = e.target.value;
    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  const filteredUsers = users.filter((user) => {
    return user.includes(searchName);
  });

  return (
    <div className={styles.SearchUsers}>
      <h1>Search user</h1>
      <input type='text' value={searchName} onChange={handleSearch} />
      <ul>
        {filteredUsers.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </div>
  );
}

export default SearchUsers;
