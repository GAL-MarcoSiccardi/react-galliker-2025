import { useState } from 'react';
import './Counter.css';
export function TextCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <h3>Text Counter:</h3>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
