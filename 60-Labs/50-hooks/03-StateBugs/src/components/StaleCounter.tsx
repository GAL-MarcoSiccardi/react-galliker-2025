import {useEffect, useState} from "react";
import "./Counter.css";
export function StaleCounter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);
  
  return (
    <div className="counter">
      <h3>Stale Counter:</h3>
      <h2>{count}</h2>
      <div>Why is the count only increasing from 0 to 1?</div>
    </div>
  );
}
