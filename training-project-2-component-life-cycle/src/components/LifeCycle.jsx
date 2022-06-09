import { Component } from 'react';
import styled from 'styled-components';

import ChildComponent from 'components/ChildComponent';

const Container = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  width: 80%;
  border-radius: 2rem;
  background-color: #323232;
  box-shadow: 2px 2px 6px #00000083;
  color: white;

  p {
    font-size: 1.2rem;
  }
`;

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Foo',
      step: 1
    };

    console.log(`Parent => Etape ${this.state.step} : Constructor`);
  }

  componentDidMount() {
    console.log(`Parent => Etape ${this.state.step} : componentDidMount`);

    this.setState({
      name: this.props.name,
      step: this.state.step + 1
    });

    console.log(
      `Parent => Etape ${this.state.step} : UpdateState in componentDidMount`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Parent => Etape ${this.state.step} : componentDidUpdate`);
    console.table({ previousState: prevState, newState: this.state });
  }

  componentWillUnmount() {
    console.log(`Parent => Etape ${this.state.step} : componentWillUnmount`);
  }

  render() {
    console.log(`Parent => Etape ${this.state.step} : Render`);

    return (
      <Container>
        {console.log(
          `Parent => Etape ${this.state.step} : Return (Update DOM)`
        )}
        <h2>LifeCycle Component</h2>
        <p>Loading step : {this.state.step}</p>
        <p>Name: {this.state.name}</p>
        {/* <ChildComponent /> */}
      </Container>
    );
  }
}

export default LifeCycle;
