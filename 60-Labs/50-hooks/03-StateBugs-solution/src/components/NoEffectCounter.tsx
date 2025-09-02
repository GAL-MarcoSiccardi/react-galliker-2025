import {useEffect, useState} from "react";
import "./Counter.css";
export function NoEffectCounter() {
  const [count, setCount] = useState(0);
  
    setInterval(() => {
      setCount(count + 1);
      console.log("NoEffectCounter -> Count hochgezählt: " + count)
    }, 1000);
  
  return (
    <div className="counter">
      <h3>Stale Counter:</h3>
      <h2>{count}</h2>
      <div>Warum zählt der Count nur von 0 auf 1 und nicht weiter?</div>
    </div>
  );
}
