import { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log(`Child => Constructor`);
  }

  componentDidMount() {
    console.log(`Child => componentDidMount`);
  }

  render() {
    console.log(`Child => Render`);

    return (
      <div>
        <p>Child Component</p>
        {console.log(`Child => Return (Update DOM)`)}
      </div>
    );
  }
}

export default ChildComponent;
