import {useEffect, useState} from "react";
import "./Counter.css";
  
let count = 0;
export function NoStateCounter() {

  useEffect(() => {
    setInterval(() => {
      count = count + 1;
      console.log("NoStateCounter -> Count hochgezählt: " + count);
    }, 1000);

  }, []);

  return (
    <div className="counter">
      <h3>No State Counter:</h3>
      <h2>{count}</h2>
      <div>Warum zählt der Count nicht hoch?</div>
    </div>
  );
}
