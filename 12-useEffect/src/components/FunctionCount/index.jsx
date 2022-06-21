import { useState, useEffect } from 'react';

function FunctionCount() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Mise a jour du titre via useEffect');
    document.title = `Vous avez cliqué ${count} fois`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default FunctionCount;
