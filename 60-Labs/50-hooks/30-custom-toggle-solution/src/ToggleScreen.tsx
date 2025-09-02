import { Switch } from '@mui/material';
import {CoolStatus} from './CoolStatus';
import {useToggle} from './useToggle';
// import {useToggle} from 'react-use'; // using react-use instead of our own useToggle

export function ToggleScreen() {
  const [isCool, toggle] = useToggle(true);

  return (
    <div>
      <Switch
        checked={isCool}
        onChange={toggle}
        inputProps={{'aria-label': 'controlled'}}
      />
      <CoolStatus isCool={isCool}/>
    </div>
  );
}