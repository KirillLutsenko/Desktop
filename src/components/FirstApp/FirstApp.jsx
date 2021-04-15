import React, { useState, useEffect } from 'react';
import { Desktop } from './Desktop/Desktop';
import { getInfo } from '../../api';

export const FirstApp = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    getInfo()
      .then(res => setIcons(res));
  }, []);

  return (
    <div className="first-app">
      {(icons.length) ? (
        <Desktop
          icons={icons}
          setIcons={setIcons}
        />
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
