import ReactDOM from 'react-dom';

function MyComponent() {
  return ReactDOM.createPortal(
    <div>
      <p>Je suis dans modal-root</p>
    </div>,
    document.getElementById('modal-root')
  );
}

export default MyComponent;
