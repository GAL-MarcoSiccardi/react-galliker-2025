import { Switch } from '@mui/material';
import {useState} from 'react';
import {CoolStatus} from './CoolStatus';


function useToggle(startval: boolean){
  const [boolVal, setBoolVal] = useState(startval);
  
  function toggle(){
    setBoolVal(!boolVal);
  }
  
  return {boolVal, toggle}
}

export function ToggleScreen() {
  // const [isCool, setIsCool] = useState(true);
  const {boolVal, toggle} = useToggle(false);

  return (
    <div>
      <Switch
        checked={boolVal}
        onChange={() => toggle()}
        inputProps={{'aria-label': 'controlled'}}
      />
      <CoolStatus isCool={boolVal}/>
    </div>
  );
}