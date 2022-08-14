import React from 'react';
import PropTypes from 'prop-types';

export const SectionTitle = ({ title, total, NotificationMessage, children }) => {
  return (
    <div>
      {/* {title && <h1>{title}</h1>} */}
      {<h1>{title}</h1>}
      {children}
      {/* {total && children} */}
      {/* {total ? children : <p>{NotificationMessage}</p>}  */}
      
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


