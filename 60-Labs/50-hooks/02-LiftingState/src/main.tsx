import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const c = 42;

console.log('Test');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
