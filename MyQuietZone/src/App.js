import React from 'react';
import SoundToggle from './components/SoundToggle';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>My Quiet Zone</h1>
      <SoundToggle label="Fireplace" src="/assets/audio/tavern/Fireplace.mp3" />
      <SoundToggle label="Plate" src="/assets/audio/tavern/Plate.mp3" />
      <SoundToggle label="SongVoice" src="/assets/audio/tavern/SPTSongVoice.mp3" />
    </div>
  );
}

export default App;
