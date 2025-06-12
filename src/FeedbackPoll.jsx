import React, { useState } from "react";

const FeedbackPoll = (e) => {
  const [feedback, setFeedback] = useState("");

  let Handler = (e) => {
    setFeedback(e);
  };

  return (
    <div>
      <p>Please provide your valueable feedback!</p>
      {!feedback ? (
        <div>
          <button onClick={() => Handler("Good")}>Good</button>
          <button onClick={() => Handler("Neutral")}>Neutral</button>
          <button onClick={() => Handler("Bad")}>Bad</button>
        </div>
      ) : (
        <p>Thank You for your feedback {feedback}</p>
      )}
    </div>
  );
};

export default FeedbackPoll;
