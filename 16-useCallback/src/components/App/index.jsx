import Count from 'components/Count';
import Button from 'components/Button';
import { useState, useCallback } from 'react';
import styles from './style.module.css';

const App = () => {
  const [countOne, setCountOne] = useState({
    value: 0,
    btnColor: '#2a6494',
    increment: 21
  });
  const [countTwo, setCountTwo] = useState({
    value: 0,
    btnColor: '#6434a3',
    increment: 13
  });

  const incrementCountOne = useCallback(
    (val) => {
      countOne.value + val < 100
        ? setCountOne({ ...countOne, value: countOne.value + val })
        : setCountOne({ ...countOne, value: 100 });
    },
    [countOne]
  );

  const incrementCountTwo = useCallback(
    (val) => {
      countTwo.value + val < 100
        ? setCountTwo({ ...countTwo, value: countTwo.value + val })
        : setCountTwo({ ...countTwo, value: 100 });
    },
    [countTwo]
  );

  return (
    <div className={styles.App}>
      <Count
        text='Count One'
        count={countOne.value}
        bgColor={countOne.btnColor}
      />
      <Button
        handleClick={incrementCountOne}
        btnColor={countOne.btnColor}
        increment={countOne.increment}
      >
        Add {countOne.increment}% to Count 1
      </Button>
      <Button
        handleClick={() => setCountOne({ ...countOne, value: 0 })}
        btnColor={countOne.btnColor}
      >
        Reset Count 1
      </Button>

      <Count
        text='Count Two'
        count={countTwo.value}
        bgColor={countTwo.btnColor}
      />
      <Button
        handleClick={incrementCountTwo}
        btnColor={countTwo.btnColor}
        increment={countTwo.increment}
      >
        Add {countTwo.increment}% to Count 2
      </Button>
      <Button
        handleClick={() => setCountTwo({ ...countTwo, value: 0 })}
        btnColor={countTwo.btnColor}
      >
        Reset Count 2
      </Button>
    </div>
  );
};

export default App;
