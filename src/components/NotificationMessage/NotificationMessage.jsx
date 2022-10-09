import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/NotificationMessage/NotificationMessage.module.css' 


export const NotificationMessage = ({ message }) => {
  return (
      <p className={css.NotificationsMessage}>{ message }</p>
  );
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};


