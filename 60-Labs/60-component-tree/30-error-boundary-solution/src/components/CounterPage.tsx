import {ErrorBoundary} from 'react-error-boundary';
import {RenderErrorCounter} from './RenderErrorCounter';
import {EventErrorCounter} from './EventErrorCounter';
import {ErrorDisplay} from './ErrorDisplay';

const counterRowStyle = {background: 'gold', display: 'flex', flexDirection: 'row' as const, justifyContent: 'space-evenly',};
const counterContainerStyle = {display: 'flex', flexDirection: 'column' as const, justifyContent: 'center'};

export function CounterPage() {

  return (
    <ErrorBoundary fallback={<ErrorDisplay/>}>
      <div>
        <ErrorBoundary fallback={<ErrorDisplay/>}>
          <div style={counterRowStyle}>
            <div style={counterContainerStyle}>
              <RenderErrorCounter/>
            </div>
            <div style={counterContainerStyle}>
              <RenderErrorCounter/>
            </div>
          </div>
        </ErrorBoundary>
        <div style={{...counterRowStyle, ...{background: 'cyan'}}}>
          <div style={counterContainerStyle}>
            <RenderErrorCounter/>
          </div>
          <div style={counterContainerStyle}>
            <EventErrorCounter/>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}