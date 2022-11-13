import React, { useState } from 'react';
import { StyledAudio } from './index.style';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useEffect } from 'react';

const AudioButton = ({ size, audioUrl }) => {
  const [playing, setPlaying] = useState(false);

  const setAudioPlaying = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = document.getElementById('audio');
    playing ? audio.play() : audio.pause();
    audio.onended = () => {
      setPlaying(false);
    };
  });

  return (
    <StyledAudio size={size}>
      <audio id="audio">
        <source src={audioUrl} />
      </audio>
      <div className="controls">
        {playing ? (
          <PauseIcon onClick={setAudioPlaying} />
        ) : (
          <PlayArrowIcon onClick={setAudioPlaying} />
        )}
      </div>
    </StyledAudio>
  );
};

export default AudioButton;
