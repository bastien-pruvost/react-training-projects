import { Component } from 'react';
import Enfant from './Enfant';

class Parent extends Component {
  state = {
    messageParent: null,
    messageEnfant: null,
    disabled: true
  };

  ordreParent = (msg) => {
    this.setState({
      messageParent: msg,
      disabled: false
    });
  };
  reponseEnfant = (msg) => this.setState({ messageEnfant: msg });

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <button onClick={() => this.ordreParent('Execute cette tache')}>
          Donner un ordre
        </button>

        <p>{this.state.messageParent}</p>

        <hr />

        <Enfant
          name='Enfant'
          reponseEnfant={this.reponseEnfant}
          parentState={this.state}
        />
      </div>
    );
  }
}

export default Parent;
