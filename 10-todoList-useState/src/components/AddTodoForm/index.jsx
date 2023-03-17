import { useState } from 'react';
import style from './style.module.css';

const AddTodoForm = ({ addNewTodo }) => {
  const [addTodoInput, setAddTodoInput] = useState('');

  const handleTodo = (e) => {
    e.preventDefault();
    addNewTodo(addTodoInput);
    setAddTodoInput('');
  };

  return (
    <form className={style.AddTodoForm} onSubmit={handleTodo}>
      <input
        type='text'
        placeholder='Add a todo'
        value={addTodoInput}
        onInput={(event) => setAddTodoInput(event.target.value)}
      />
      <button type='submit'>+ Ajouter</button>
    </form>
  );
};

export default AddTodoForm;
