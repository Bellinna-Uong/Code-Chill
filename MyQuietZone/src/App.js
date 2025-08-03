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

  // Fonction pour obtenir l'image du portal selon le thème
  const getPortalImage = () => {
    return `/assets/ui/portal-${currentTheme}.png`;
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
            src={getPortalImage()} 
            alt="Portal mystique" 
            className="portal-image"
          />
        </div>
        
        <div className="sounds-section">
          <SoundToggle label="Fireplace" src="/assets/audio/tavern/Fireplace.mp3" />
          <SoundToggle label="Plate" src="/assets/audio/tavern/Plate.mp3" />
          <SoundToggle label="Beer" src="/assets/audio/tavern/Beer.mp3" />
          <SoundToggle label="SongVoice" src="/assets/audio/tavern/SPTSongVoice.mp3" />
          <SoundToggle label="SongNoVoice" src="/assets/audio/tavern/INVUSongNoVoice.mp3" />
          <SoundToggle label="PeopleChatting" src="/assets/audio/tavern/PeopleChatting.mp3" />
        </div>
      </div>
    </div>
  );
}

export default App;
