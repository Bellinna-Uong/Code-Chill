import React, { useState, useRef } from 'react';

export default function SoundToggle({ label, src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(new Audio(src));

  const toggle = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.loop = true;
      audio.volume = volume;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    audioRef.current.volume = vol;
    setVolume(vol);
  };

  return (
    <div style={{ margin: '1rem' }}>
      <button onClick={toggle}>
        {isPlaying ? `⏸️ Stop ${label}` : `▶️ Play ${label}`}
      </button>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
    </div>
  );
}
