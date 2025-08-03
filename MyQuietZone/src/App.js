import React, { useState, useEffect } from 'react';
import SoundToggle from './components/SoundToggle';
import './themes.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('tavern');

  useEffect(() => {
    document.body.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };

  return (
    <div className="App">
      <div className="theme-selector">
        <label htmlFor="theme-select">Thème:</label>
        <select 
          id="theme-select" 
          value={currentTheme} 
          onChange={handleThemeChange}
        >
          <option value="tavern">Tavern</option>
          <option value="potionlab">PotionLab</option>
          <option value="train">Train</option>
        </select>
      </div>

      <h1>My Quiet Zone</h1>
      <h2>A place to relax and recharge</h2>
      <div className="main-content">
        <div className="portal-section">
          <img 
            src="/assets/ui/portal.png" 
            alt="Portal mystique" 
            className="portal-image"
          />
        </div>
        
        <div className="sounds-section">
          <SoundToggle label="Fireplace" src="/assets/audio/tavern/Fireplace.mp3" />
          <SoundToggle label="Plate" src="/assets/audio/tavern/Plate.mp3" />
          <SoundToggle label="SongVoice" src="/assets/audio/tavern/SPTSongVoice.mp3" />
        </div>
      </div>
    </div>
  );
}

export default App;
