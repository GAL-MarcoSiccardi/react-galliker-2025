import { FormEvent, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const textInputRef = useRef<HTMLInputElement>(null);
  const previousWordRef = useRef<string>("");
  const [textInput, setTextInput] = useState("");
  const [previousWord, setPreviousWord] = useState("");

  function storeWord(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    textInputRef.current?.focus();
    previousWordRef.current = textInput;
    setTextInput("");
  }

  function loadPreviousWord() {
    setPreviousWord(previousWordRef.current);
  }

  console.log("Rendering ...");
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Use Ref</h1>
      <div className="card">
        <form onSubmit={storeWord}>
          <input
            ref={textInputRef}
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button>Store Word!</button>
        </form>
      </div>
      <div className="card">
        <div>Previous Word:</div>
        <button onClick={loadPreviousWord}>Load -1</button>
        <button>Load -2</button>
        <button>Load -3</button>
        <div style={{ padding: 15 }}>{previousWord}</div>
      </div>
    </div>
  );
}

export default App;
