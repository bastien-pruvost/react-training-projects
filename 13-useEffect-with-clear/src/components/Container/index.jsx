import ClassDisplayKey from 'components/ClassDisplayKey';
import { useState } from 'react';

function Container() {
  const [show, setShow] = useState(true);

  const buttonText = show ? 'Cacher' : 'Afficher';

  return (
    <div>
      <button onClick={() => setShow(!show)}>{buttonText}</button>
      {show && <ClassDisplayKey />}
    </div>
  );
}

export default Container;
