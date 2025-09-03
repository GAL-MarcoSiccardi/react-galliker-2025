import { use } from "react";
import {DateContext} from './DateContext';

export function LevelThree() {
  const {date, update} = use(DateContext);
  console.log('LevelThree rendered')
  return (
    <div style={{background: '#ffcc99', padding: 50}}>
      <h3 >Content</h3>
      <div>{date.toLocaleTimeString()}</div>
      <button onClick={update}>Update</button>
    </div>
  );
}