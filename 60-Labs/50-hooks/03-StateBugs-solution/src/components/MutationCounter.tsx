import {useEffect, useState} from "react";
import "./Counter.css";
  
export function MutationCounter() {
  const [state, setState] = useState({count: 0});

  useEffect(() => {
    setInterval(() => {
      // state.count = state.count + 1;
     
      setState((state) => {
        const newState = {count: state.count + 1};
        return newState;
      });
      
      // using immer -> npm install immer
      // setState((state) => {
      //   const newState = produce(state, draftState => {
      //     draftState.count = draftState.count + 1;
      //   })
      //   return newState;
      // });
      
    }, 1000);
  }, []);

  return (
    <div className="counter">
      <h3>Mutation Counter:</h3>
      <h2>{state.count}</h2>
      <div>Warum zählt der Count nicht hoch?</div>
    </div>
  );
}
