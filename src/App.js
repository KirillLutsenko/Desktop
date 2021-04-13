import React, { useState, useEffect } from 'react';
import { getInfo } from './api';
import './App.scss';
import { Desktop } from './components/Desktop/Desktop';

function App() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    getInfo()
      .then(res => setIcons(res));
  }, []);

  return (
    <div className="app">
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
}

export default App;
