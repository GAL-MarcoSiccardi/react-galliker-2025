import {useEffect, useState} from "react";
import "./Counter.css";
  
let count = 0;
export function MutationCounter() {
  const [state, setState] = useState({count: 0});

  useEffect(() => {
    setInterval(() => {
      state.count = state.count + 1;
      console.log("MutationCounter -> count incremented: " + state.count);
      setState(state);
    }, 1000);
  }, []);

  return (
    <div className="counter">
      <h3>Mutation Counter:</h3>
      <h2>{count}</h2>
      <div>Why is the count not increasing?</div>
    </div>
  );
}
