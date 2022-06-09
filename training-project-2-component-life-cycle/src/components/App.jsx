// Import styles
import { Component } from 'react';
import 'styles/App.css';
// Import components
import LifeCycle from 'components/LifeCycle';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LifeCycle />
      </div>
    );
  }
}

export default App;
