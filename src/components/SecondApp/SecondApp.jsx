import React, { useState } from 'react';
import { Block } from './components/Block/Block';
import { Menu } from './components/Menu/Menu';
import { DesktopField } from './StyledComponents';

export const SecondApp = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const newArray = Array(14).fill(null);
  const blocks = newArray.map((number, index) => ({ id: index }));

  return (
    <div className="second-app">
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
            setMenuVisibility={setMenuVisibility}
            xCoord={xCoord}
            yCoord={yCoord}
          />
        )}
      </DesktopField>
    </div>
  );
};
