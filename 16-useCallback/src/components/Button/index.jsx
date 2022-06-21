import { memo } from 'react';
import style from './style.module.css';

function Button({ handleClick, btnColor, increment, children }) {
  const btnStyle = { backgroundColor: `${btnColor}` };

  return (
    <button
      onClick={() => handleClick(increment)}
      className={style.Button}
      style={btnStyle}
    >
      {children}
    </button>
  );
}

export default memo(Button);
