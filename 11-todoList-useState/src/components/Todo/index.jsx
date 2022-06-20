import { useState } from 'react';
import style from './style.module.css';

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'Acheter du lait'
    },
    {
      id: 2,
      todo: 'Acheter du pain'
    },
    {
      id: 3,
      todo: 'Acheter du fromage'
    }
  ]);

  const allTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.todo}</li>;
  });

  return (
    <div className=''>
      <h1>Todo List ({todos.length})</h1>
      <ul>{allTodos}</ul>
    </div>
  );
};

export default Todo;
