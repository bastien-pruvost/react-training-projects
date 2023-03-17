import { memo } from 'react';
import style from './style.module.css';

function Count({ text, count, bgColor }) {
  console.log(text);

  const progressStyle = {
    width: `${count}%`,
    backgroundColor: `${bgColor}`,
    opacity: `${count < 100 ? 0.6 : 1}`
  };

  return (
    <div className={style.Count}>
      <h1>{count}%</h1>
      <div className={style.Count__progress}>
        <span
          className={style.Count__progress__bar}
          style={progressStyle}
        ></span>
      </div>
    </div>
  );
}

export default memo(Count);
