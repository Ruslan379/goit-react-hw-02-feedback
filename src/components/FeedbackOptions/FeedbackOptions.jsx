import React from 'react';

export const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => (
  <div className="FeedBack__options">
    <h1 className="FeedBack__title">{onLeaveFeedback}</h1>

    <button type="button" onClick={good}>Good</button>
    <button type="button" onClick={neutral}>Neutral</button>
    <button type="button" onClick={bad}>Bad</button>
  </div>
);


