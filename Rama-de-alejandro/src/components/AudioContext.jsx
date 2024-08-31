import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const AudioContext = createContext();

export function useAudio() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const audioRef = useRef(new Audio('/assets/musicalinda.mp3')); // Ruta de la canción
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ togglePlay, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
}
