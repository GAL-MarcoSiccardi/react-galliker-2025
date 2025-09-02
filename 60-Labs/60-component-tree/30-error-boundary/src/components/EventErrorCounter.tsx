import {useState} from 'react';
import {isValueValid} from './counterUtil';

export function EventErrorCounter() {

  const [count, setCount] = useState(0);

  function handleClick() {
    const nextValue = count + 1;
    const isValid = isValueValid(nextValue);
    if (isValid) {
      setCount(nextValue);
    }
  }

  return (
    <div>
      <h3>Count</h3>
      <h1 onClick={handleClick}>{count}</h1>
    </div>
  );
}