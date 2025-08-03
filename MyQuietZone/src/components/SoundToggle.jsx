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
    <div className="sound-toggle">
      <button onClick={toggle} className="sound-button">
        <img 
          src={isPlaying ? "/assets/ui/pause.svg" : "/assets/ui/play.svg"} 
          alt={isPlaying ? "Pause" : "Play"}
          className="play-pause-icon"
        />
        <span className="sound-label">{label}</span>
      </button>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
    </div>
  );
}
