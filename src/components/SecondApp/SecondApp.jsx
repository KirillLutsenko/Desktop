import React, { useState } from 'react';
import { Block } from './components/Block/Block';
import { Menu } from './components/Menu/Menu';
import { DesktopField, SecondAppWrapper } from './StyledComponents';

export const SecondApp = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const newArray = Array(14).fill(null);
  const blocks = newArray.map((number, index) => ({ id: index }));

  const closeMenu = () => {
    setMenuVisibility(false);
  };

  return (
    <SecondAppWrapper
      className="second-app"
      onClick={closeMenu}
      onKeyDown={closeMenu}
      role="button"
      tabIndex="0"
    >
      <DesktopField>
        {blocks.map((block, index) => (
          <Block
            key={block.id}
            index={index}
            setXCoord={setXCoord}
            setYCoord={setYCoord}
            setMenuVisibility={setMenuVisibility}
          />
        ))}
        {menuVisibility && (
          <Menu
            xCoord={xCoord}
            yCoord={yCoord}
            closeMenu={closeMenu}
          />
        )}
      </DesktopField>
    </SecondAppWrapper>
  );
};
