import { Component } from 'react';

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  addOne = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  render() {
    return (
      <div className=''>
        <p>ClassState: {this.state.counter}</p>
        <button onClick={this.addOne}>Change ClassState</button>
      </div>
    );
  }
}

export default ClassState;
