import { useState } from 'react';

interface FeedbackFormProps {
  onSubmit: (value: string) => void;
}
export function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h2>Feedback Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(message);
          setMessage('');
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
