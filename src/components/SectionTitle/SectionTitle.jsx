import React from 'react';
import PropTypes from 'prop-types';

export const SectionTitle = ({ total, title, NotificationMessage, children }) => {
  return (
    <div>
      {/* {title && <h1>{title}</h1>} */}
      {<h1>{title}</h1>}
      {/* {total && children} */}
      {total ? children : <p>{NotificationMessage}</p>}
      {/* {children} */}
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};


