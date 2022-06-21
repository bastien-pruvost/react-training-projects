import { Component } from 'react';
import style from './style.module.css';

export class ClassDisplayKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyCode: null
    };
  }

  handleKeyCode = (e) => {
    console.log(e.code);
    this.setState({
      keyCode: e.code
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyCode);
  }

  componentWillUnmount() {
    console.log('CWillUnmount');
    document.removeEventListener('keyup', this.handleKeyCode);
  }

  render() {
    const { keyCode } = this.state;

    return (
      <div className={style.ClassDisplayKey}>
        <h1>{keyCode}</h1>
      </div>
    );
  }
}

export default ClassDisplayKey;
