import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {ReducerCounter} from './components/ReducerCounter';

function App() {

  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Counter with Reducer</h1>
      <div className="card">
        <ReducerCounter />
      </div>
    </div>
  );
}

export default App;
