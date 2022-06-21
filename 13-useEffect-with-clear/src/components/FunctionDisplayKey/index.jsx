import { useEffect, useState } from 'react';
import style from './style.module.css';

function FunctionDisplayKey() {
  const [keyCode, setKeyCode] = useState('');

  const handleKeyCode = (e) => {
    console.log(e.code);
    setKeyCode(e.code);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyCode);

    return () => {
      document.removeEventListener('keyup', handleKeyCode);
    };
  }, []);

  return (
    <div className={style.ClassDisplayKey}>
      <h1>{keyCode}</h1>
    </div>
  );
}

export default FunctionDisplayKey;
