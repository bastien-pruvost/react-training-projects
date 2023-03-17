import ClassCount from 'components/ClassCount';
import FunctionCount from 'components/FunctionCount';
import style from './style.module.css';

function App() {
  return (
    <div className={style.App}>
      {/* <ClassCount /> */}
      <FunctionCount />
    </div>
  );
}

export default App;
