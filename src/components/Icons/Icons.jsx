import React from 'react';
import PropTypes from 'prop-types';
import './Icons.scss';

export const Icons = ({ icons }) => (
  <div className="desktop__icons icons">
    {icons.map(icon => (
      <div key={icon.fid} className="icons_icon icon">
        <div className="icon__logo logo" />
        <span className="icon__text">{icon.name}</span>
      </div>
    ))}
  </div>
);

Icons.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    fid: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
).isRequired;
