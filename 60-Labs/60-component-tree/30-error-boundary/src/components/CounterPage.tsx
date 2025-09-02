import {RenderErrorCounter} from './RenderErrorCounter';
import {EventErrorCounter} from './EventErrorCounter';

const counterRowStyle = {background: 'gold', display: 'flex', flexDirection: 'row' as const, justifyContent: 'space-evenly', };
const counterContainerStyle = {display: 'flex', flexDirection: 'column' as const, justifyContent: 'center'};

export function CounterPage() {
  
  return (
    <div>
      <div style={counterRowStyle}>
        <div style={counterContainerStyle}>
          <RenderErrorCounter/>
        </div>
        <div style={counterContainerStyle}>
          <RenderErrorCounter/>
        </div>
      </div>
      <div style={{ ...counterRowStyle, ...{background: 'cyan'}}}>
        <div style={counterContainerStyle}>
          <RenderErrorCounter/>
        </div >
        <div style={counterContainerStyle}>
          <EventErrorCounter/>
        </div>
      </div>
    </div>
  )
}