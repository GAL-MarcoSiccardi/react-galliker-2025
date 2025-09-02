import "./Counter.css";
import {CounterProps} from './CounterProps';
export function TextCounter({count, onIncrease}: CounterProps) {

  return (
    <div className="counter">
      <h3>Text Counter:</h3>
      <h2>{count}</h2>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}
