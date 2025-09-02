import {useState} from 'react';
import {isValueValid} from './counterUtil';

export function EventErrorCounter() {

  const [count, setCount] = useState(0);
  const [error, setError] = useState<any>(undefined);

  function handleClick() {
    try {
      const nextValue = count + 1;
      const isValid = isValueValid(nextValue);
      if (isValid) {
        setCount(nextValue);
      }
    } catch (e) {
      setError(e);
    }
  }

  if (error) {
    throw new Error(error?.message || 'Unknown error');
  }
  return (
    <div>
      <h3>Count</h3>
      <h1 onClick={handleClick}>{count}</h1>
    </div>
  );
}