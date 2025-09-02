import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TextCounter, MyComponent} from "./components/TextCounter";
import { ProgressCounter } from "./components/ProgressCounter";
import { IconCounter } from "./components/IconCounter";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  
  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Lifting State</h1>
      <div className="card">
        <TextCounter count={count} onIncrease={increase}/>
        <ProgressCounter count={count} onIncrease={increase} />
        <IconCounter count={count} onIncrease={increase}/>
      </div>
    </div>
  );
}

export default App;

