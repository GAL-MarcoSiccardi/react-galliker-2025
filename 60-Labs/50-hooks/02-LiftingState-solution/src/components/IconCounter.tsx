import "./Counter.css";
import {CounterProps} from './CounterProps';
export function IconCounter({count, onIncrease}: CounterProps) {

  return (
    <div className="counter">
      <h3>Icon Counter: </h3>
      <h1>{mapIcon(count)}</h1>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}


function mapIcon(count: number) {
  switch (count % 10) {
    case 0:
      return "🤷‍";
    case 1:
      return "🤔";
    case 2:
      return "👀";
    case 3:
      return "🤯";
    case 4:
      return "😎";
    case 5:
      return "🤮";
    case 6:
      return "💀";
    case 7:
      return "🍿";
    case 8:
      return "💧";
    default:
      return "🎉";
  }
}