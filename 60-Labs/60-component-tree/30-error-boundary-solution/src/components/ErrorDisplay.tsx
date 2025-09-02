import {useErrorBoundary} from 'react-error-boundary';

export function ErrorDisplay() {
  const { resetBoundary } = useErrorBoundary();
  function refreshPage() {
    // window.location.reload();
    resetBoundary();
  }

  return (
    <div>
      <h1>🤷‍</h1>
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
}