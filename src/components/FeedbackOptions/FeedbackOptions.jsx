import React from 'react';
import PropTypes from 'prop-types';
import { CapitalizeFirstLetter } from 'components/CapitalizeFirstLetter/CapitalizeFirstLetter';

// const CapitalizeFirstLetter = (str) => {
//   return str[0].toUpperCase() + str.substring(1)
// }

export const FeedbackOptions = ({ options, onLeaveFeedback, good, neutral, bad, LeaveFeedback }) => (
  <div className="FeedBack__options">
    {/* <h1 className="FeedBack__title">{LeaveFeedback}</h1> */}

    {/* <button type="button" onClick={onLeaveFeedback}>Good</button>
    <button type="button" onClick={onLeaveFeedback}>Neutral</button>
    <button type="button" onClick={onLeaveFeedback}>Bad</button> */}

    {Object.keys(options).map(key => (
      <button key={key}
        type="button"
        onClick={onLeaveFeedback}>
        {CapitalizeFirstLetter(key)}
      </button>
    ))} 
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


