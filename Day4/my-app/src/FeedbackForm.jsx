import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState('');

  return (
    <div className="feedback-card">
      <h3>💬 Feedback Form</h3>
      <textarea
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        placeholder="Write your feedback here..."
      />
      <p className="live-preview">
        <strong>Preview:</strong> {feedbackText}
      </p>
    </div>
  );
};

export default FeedbackForm;
