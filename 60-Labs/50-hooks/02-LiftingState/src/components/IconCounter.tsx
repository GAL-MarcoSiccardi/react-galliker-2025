import { useState } from 'react';
import './Counter.css';
export function IconCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <h3>Icon Counter: </h3>
      <h1>{mapIcon(count)}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function mapIcon(count: number) {
  switch (count % 10) {
    case 0:
      return '🤷‍';
    case 1:
      return '🤔';
    case 2:
      return '👀';
    case 3:
      return '🤯';
    case 4:
      return '😎';
    case 5:
      return '🤮';
    case 6:
      return '💀';
    case 7:
      return '🍿';
    case 8:
      return '💧';
    default:
      return '🎉';
  }
}
