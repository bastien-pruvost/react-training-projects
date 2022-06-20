import { Component } from 'react';
import styles from './style.module.css';
import axios from 'axios';
import Users from 'components/Users';

class Profile extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    const profileId = this.props.match.params.profileId;

    let payload = {
      token: 'nqEliAeznAL7M6L0zBkH4A',
      data: {
        name: 'nameFirst',
        email: 'internetEmail',
        phone: 'phoneHome',
        _repeat: 10
      }
    };

    axios({
      method: 'post',
      url: 'https://app.fakejson.com/q',
      data: payload
    }).then((resp) => {
      this.setState({
        data: resp.data[profileId]
      });
    });
  }

  render() {
    const { name, email, phone } = this.state.data;

    return (
      <div className={styles.Profile}>
        <Users />
        <h1>Profile</h1>
        <ul>
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
  }
}

export default Profile;
