import {useState} from 'react';
import {isValueValid} from './counterUtil';

export function RenderErrorCounter() {

  const [count, setCount] = useState(0);

  function handleClick() {
    const nextValue = count + 1;
    setCount(nextValue);
  }

  let icon = '✅';
  const isValid = isValueValid(count);
  if (!isValid) {
    icon = '⚠️';
  }

  return (
    <div>
      <h3>Count {icon}</h3>
      <h1 onClick={handleClick}>{count}</h1>
    </div>
  );
}