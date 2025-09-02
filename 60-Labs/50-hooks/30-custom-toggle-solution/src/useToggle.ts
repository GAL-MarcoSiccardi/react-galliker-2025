import {useState} from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  function toggle() {
    console.log('TOGGELING TO', !value)
    setValue((value) => !value);
  } 
  
  return [value, toggle] as const
  // return [value, toggle] as [boolean, typeof toggle];
  // return [value, toggle] as any;
}