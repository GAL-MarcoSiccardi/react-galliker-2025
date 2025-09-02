import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TextCounter } from "./components/TextCounter";

function App() {

  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Interval Counter</h1>
      <div className="card">
        <TextCounter />
      </div>
    </div>
  );
}

export default App;
