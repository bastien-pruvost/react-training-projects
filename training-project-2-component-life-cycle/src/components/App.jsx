import { Component } from 'react';
import styled from 'styled-components';

import LifeCycle from 'components/LifeCycle';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  background-color: #f1f1f1;
`;

class App extends Component {
  state = {
    display: true
  };

  toggleComponent = () => {
    this.setState({
      display: !this.state.display
    });
  };

  render() {
    const showComponent = this.state.display ? (
      <LifeCycle name='Bar' />
    ) : (
      <div></div>
    );

    return (
      <AppContainer>
        {showComponent}
        <button onClick={this.toggleComponent}>Cliquez ici</button>
      </AppContainer>
    );
  }
}

export default App;
