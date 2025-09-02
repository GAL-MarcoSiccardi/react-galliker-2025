import {useEffect, useReducer, useState} from "react";
import "./Counter.css";
import {counterReducer, createInitialCounterState} from './counterState';


export function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, createInitialCounterState());
  
  return (
    <div className="counter">
      <h3>Stale Counter:</h3>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({type: 'increment'})} >Increment</button>
      <button onClick={() => dispatch({type: 'reset'})} >Reset</button>
    </div>
  );
}
