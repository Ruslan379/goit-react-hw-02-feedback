import React from 'react';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="Statistics">
    {/* <h1 className="Statistics__title">Statistics</h1> */}

    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>

    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);


