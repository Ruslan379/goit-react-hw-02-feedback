import React from 'react';

export const Controls = ({ good, neutral, bad }) => (
  <div className="FeedBack__controls">
    <button type="button" onClick={good}>Good</button>
    <button type="button" onClick={neutral}>Neutral</button>
    <button type="button" onClick={bad}>Bad</button>
    </div>
);


