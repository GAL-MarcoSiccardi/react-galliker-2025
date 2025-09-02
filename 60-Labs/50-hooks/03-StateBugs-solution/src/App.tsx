import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { StaleCounter } from "./components/StaleCounter";
import {NoStateCounter} from './components/NoStateCounter';
import {MutationCounter} from './components/MutationCounter';
import {NoEffectCounter} from './components/NoEffectCounter';

function App() {

  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Buggy Counters</h1>
      <div className="card">
        {/*<NoStateCounter />*/}
        <MutationCounter />
        <StaleCounter />
        {/*<NoEffectCounter/>*/}
      </div>
    </div>
  );
}

export default App;
