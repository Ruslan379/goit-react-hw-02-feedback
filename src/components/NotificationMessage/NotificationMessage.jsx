import React from 'react';
import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
  return (
    <div>
      <h3 className="Statistics__title">{ message }</h3>
    </div>
  );
}

NotificationMessage.propTypes = {
  message: PropTypes.string,
};


