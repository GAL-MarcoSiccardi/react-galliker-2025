import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TextCounter } from './components/TextCounter';
import { ProgressCounter } from './components/ProgressCounter';
import { IconCounter } from './components/IconCounter';

function App() {
  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Lifting State</h1>
      <div className="card">
        <TextCounter />
        <ProgressCounter />
        <IconCounter />
      </div>
    </div>
  );
}

export default App;
