import React from 'react';
import PropTypes from 'prop-types';
import { ClickBlock } from '../../StyledComponents';

export const Block = ({ index, setXCoord, setYCoord, setMenuVisibility }) => {
  const onClick = (e) => {
    const parent = e.target.parentNode.getBoundingClientRect();
    const element = e.target.getBoundingClientRect();

    const x = element.left - parent.left;
    const y = element.top - parent.top;

    setXCoord(x);
    setYCoord(y);
    setMenuVisibility(true);
  };

  return (
    <ClickBlock onClick={onClick}>
      {index + 1}
    </ClickBlock>
  );
};

Block.propTypes = {
  index: PropTypes.number.isRequired,
  setMenuVisibility: PropTypes.func.isRequired,
  setXCoord: PropTypes.func.isRequired,
  setYCoord: PropTypes.func.isRequired,
};
