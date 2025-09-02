import { useState, useEffect } from "react";
import "./Counter.css";

export function TextCounter() {

  const [count, setCount] = useState(0);
  const [textInput, setTextInput] = useState('1');
  const [stepSize, setStepSize] = useState(1);
  
  useEffect(() => {
    const handle = setInterval(() => {
      setCount(count => count + stepSize);
    }, 1000);
    console.log('Started interval', handle);
    return () => {
      console.log('Cleared interval', handle);
      clearInterval(handle);
    }
  }, [stepSize]);
  

  function setStep() {
    const newStep = parseInt(textInput, 10);
    if (!isNaN(newStep)) {
      setStepSize(newStep);
      setTextInput('');
    }
  }
  
  return (
    <div className="counter">
      <h3>Text Counter ({stepSize})</h3>
      <h2>{count}</h2>
      
      Step: <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)} style={{width: 50}}/>
      <button onClick={setStep}>Change!</button>
    </div>
  );
}
