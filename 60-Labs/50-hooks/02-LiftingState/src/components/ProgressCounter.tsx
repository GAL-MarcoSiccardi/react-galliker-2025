import { useState } from 'react';
import './Counter.css';

export function ProgressCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <h3>Progress Counter:</h3>
      <div
        style={{
          minHeight: '1.2em',
          fontWeight: 'bolder',
          overflowWrap: 'break-word',
          paddingBottom: '1em',
        }}
      >
        {new Array(count).fill('.').join('')}
      </div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
