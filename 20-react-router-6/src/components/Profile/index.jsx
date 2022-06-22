import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './style.module.css';
import Users from 'components/Users';

const Profile = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    let payload = {
      token: 'nqEliAeznAL7M6L0zBkH4A',
      data: {
        name: 'nameFirst',
        email: 'internetEmail',
        phone: 'phoneHome',
        _repeat: 1
      }
    };

    axios({
      method: 'post',
      url: 'https://app.fakejson.com/q',
      data: payload
    }).then((resp) => {
      setData(resp.data);
    });
  }, []);

  const { name, email, phone } = data;

  return (
    <div className={styles.Profile}>
      <Users />
      <h1>Profile</h1>
      <ul>
        <li>
          <strong>Id: {params.profileId}</strong>
        </li>
        <li>
          <strong>Nom: {name}</strong>
        </li>
        <li>
          <strong>Email: {email}</strong>
        </li>
        <li>
          <strong>Phone: {phone}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
