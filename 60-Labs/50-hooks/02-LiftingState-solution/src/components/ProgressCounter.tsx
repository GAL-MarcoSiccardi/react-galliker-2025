import "./Counter.css";
import {CounterProps} from './CounterProps';

export function ProgressCounter({count, onIncrease}: CounterProps) {
  
  return (
    <div className="counter">
      <h3>Progress Counter:</h3>
      <div style={{ minHeight: '1.2em', fontWeight: 'bolder', overflowWrap: 'break-word', paddingBottom:'1em'}}>
        {new Array(count).fill('.').join('')}
      </div>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}
