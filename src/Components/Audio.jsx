import { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleProgressChange = (e) => {
    audioRef.current.currentTime =
      (e.target.value / 100) * audioRef.current.duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    const audio = audioRef.current;
    const setAudioData = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("loadedmetadata", setAudioData);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
    };
  }, []);

  return (
    <div className="mt-28">
      <div className="p-4">
        <audio
          ref={audioRef}
          src={song}
          onTimeUpdate={handleTimeUpdate}
        >
          
        </audio>

        <div className="audio-controls flex flex-col gap-4">
          <div className="flex justify-center items-center">
           
            <button
              onClick={togglePlayPause}
              className="play-btn bg-blue-400 hover:bg-blue-500 rounded-full px-2 py-2"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              )}
            </button>
            
          </div>

          <div className="flex justify-between text-sm">
            <span id="current-time">{formatTime(currentTime)}</span>
            <span id="total-duration">{formatTime(duration)}</span>
          </div>
          <input
            id="progress-bar"
            type="range"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleProgressChange}
            className=" bg-gray-700 h-1 rounded"
          />

          <input
            id="volume-control"
            type="range"
            value={volume}
            min="0"
            max="1"
            step="0.1"
            onChange={handleVolumeChange}
            className="w-1/4 mt-1 bg-gray-700 h-1 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
