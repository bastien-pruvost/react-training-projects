import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// Import styles
import 'styles/index.css';
// Import components
import App from 'components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
