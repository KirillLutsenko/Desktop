import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuBlock,
  MenuList,
  MenuButton,
  MenuItem,
} from '../../StyledComponents';

export const Menu = ({ closeMenu, xCoord, yCoord }) => (
  <MenuBlock
    xCoord={xCoord}
    yCoord={yCoord}
    onClick={e => e.stopPropagation()}
  >
    <MenuButton
      type="button"
      onClick={closeMenu}
    >
      x
    </MenuButton>
    <MenuList>
      <MenuItem>Link1</MenuItem>
      <MenuItem>Link2</MenuItem>
      <MenuItem>Link3</MenuItem>
    </MenuList>
  </MenuBlock>
);

Menu.propTypes = {
  xCoord: PropTypes.number.isRequired,
  yCoord: PropTypes.number.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
