import { Component } from 'react';

export class ClassCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ''
    };
  }

  componentDidMount() {
    document.title = `Vous avez cliqué ${this.state.count} fois`;
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.count !== prevState.count) {
  //     console.log('Mise a jour du titre');
  //     document.title = `Vous avez cliqué ${this.state.count} fois`;
  //   }
  // }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
        <input
          type='text'
          value={this.state.name}
          onChange={(e) => {
            this.setState({
              name: e.target.value
            });
          }}
        />
      </div>
    );
  }
}

export default ClassCount;
