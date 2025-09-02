import { useState } from 'react';
import { FeedbackForm } from './FeedbackForm';

export function FeedbackPage() {
  const [isSent, setIsSent] = useState(false);

  function submit(message: string) {
    alert(`Sending: "${message}"`);
    setIsSent(true);
  }

  function reset() {
    setIsSent(false);
  }

  if (isSent) {
    return (
      <div>
        <h1>Thank you!</h1>
        <button onClick={reset}>Reset</button>
      </div>
    );
  } else {
    return <FeedbackForm onSubmit={submit} />;
  }
}
