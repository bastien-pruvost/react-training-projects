import ClassDisplayKey from 'components/ClassDisplayKey';
import FunctionDisplayKey from 'components/FunctionDisplayKey';
import { useState } from 'react';

function Container() {
  const [show, setShow] = useState(true);

  const buttonText = show ? 'Cacher' : 'Afficher';

  return (
    <div>
      <button onClick={() => setShow(!show)}>{buttonText}</button>
      {/* {show && <ClassDisplayKey />} */}
      {show && <FunctionDisplayKey />}
    </div>
  );
}

export default Container;
