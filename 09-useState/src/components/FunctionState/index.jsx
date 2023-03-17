import { useState } from 'react';

const FunctionState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className=''>
      <p>FunctionState: {counter}</p>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Change FunctionState
      </button>
    </div>
  );
};

export default FunctionState;
