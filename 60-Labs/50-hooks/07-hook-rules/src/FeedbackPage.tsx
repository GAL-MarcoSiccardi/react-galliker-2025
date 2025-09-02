import { useState } from "react";

export function FeedbackPage() {
  const [isSent, setIsSent] = useState(false);

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
    const [message, setMessage] = useState("");
    return (
      <div>
        <h2>Feedback Form</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Sending: "${message}"`);
            setIsSent(true);
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
}
