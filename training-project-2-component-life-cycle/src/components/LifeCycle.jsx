import { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  background-color: #323232;
  color: white;
  font-size: 32px;
`;

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Toto'
    };
  }

  render() {
    return (
      <div>
        <Text>LifeCycle component</Text>
      </div>
    );
  }
}

export default LifeCycle;
