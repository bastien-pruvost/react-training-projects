import { useState } from 'react';
import style from './style.module.css';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from 'components/AddTodoForm';

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

  const [warning, setWarning] = useState();

  const allTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.todo}</li>;
  });

  const addNewTodo = (newTodo) => {
    if (newTodo) {
      setWarning(false);
      setTodos([...todos, { id: uuidv4(), todo: newTodo }]);
    } else {
      setWarning(true);
    }
  };

  const displayWarning = !!warning && <div>Veuillez entrer du texte</div>;

  return (
    <div className={style.Todo}>
      <h1>Todo List ({todos.length})</h1>
      <ul>{allTodos}</ul>
      <AddTodoForm addNewTodo={addNewTodo} />
      {displayWarning}
    </div>
  );
};

export default Todo;
