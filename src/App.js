import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLightOn, setIsLightOn] = useState(true); // State to track if the light is on

  const lightme = (show) => setIsLightOn(show === 1); // Update state based on button clicked

  return (
    <div className="App">
      <div className="photo">
        <img 
          id="light-on" 
          className="light-on" 
          src={isLightOn ? "lighton.jpg" : "lightoff.jpg"} 
          alt="light" 
        />
        <button className="button" onClick={() => lightme(0)}>
          Turn off
        </button>
        <button className="button" onClick={() => lightme(1)}>
          Turn on
        </button>
      </div>
    </div>
  );
}

export default App;
