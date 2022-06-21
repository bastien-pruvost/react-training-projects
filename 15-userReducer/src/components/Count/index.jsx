import { useReducer } from 'react';
import style from './style.module.css';

const initialState = {
  countOne: 0,
  countTwo: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'decrementOne':
      return { ...state, countOne: state.countOne - action.value };
    case 'resetOne':
      return { ...state, countOne: initialState.countOne };
    case 'incrementOne':
      return { ...state, countOne: state.countOne + action.value };
    case 'decrementTwo':
      return { ...state, countTwo: state.countTwo - action.value };
    case 'resetTwo':
      return { ...state, countTwo: initialState.countTwo };
    case 'incrementTwo':
      return { ...state, countTwo: state.countTwo + action.value };
    default:
      return state;
  }
};

function Count() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={style.Count}>
      <div>
        <h1>{count.countOne}</h1>
        <button onClick={() => dispatch({ type: 'decrementOne', value: 10 })}>
          - Enlever
        </button>
        <button onClick={() => dispatch({ type: 'resetOne' })}>
          0 Réinitialiser
        </button>
        <button onClick={() => dispatch({ type: 'incrementOne', value: 10 })}>
          + Ajouter
        </button>
      </div>
      <div>
        <h1>{count.countTwo}</h1>
        <button onClick={() => dispatch({ type: 'decrementTwo', value: 1 })}>
          - Enlever
        </button>
        <button onClick={() => dispatch({ type: 'resetTwo' })}>
          0 Réinitialiser
        </button>
        <button onClick={() => dispatch({ type: 'incrementTwo', value: 1 })}>
          + Ajouter
        </button>
      </div>
    </div>
  );
}

export default Count;
