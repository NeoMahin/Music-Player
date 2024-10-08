import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Audio from "../Components/Audio";
import song1 from "../assets/Musics/creative-technology-showreel-241274.mp3";
import song2 from "../assets/Musics/happy-testimonial-247223.mp3";
import song3 from "../assets/Musics/lazy-day-stylish-futuristic-chill-239287.mp3";
import song4 from "../assets/Musics/nightfall-future-bass-music-228100.mp3";
import song5 from "../assets/Musics/optimistic-dreams-245277.mp3";
import img1 from "../assets/Untitled.jpeg";
import img2 from "../assets/octopus.jpeg";
import img3 from "../assets/shark.jpeg";
import img4 from "../assets/jelly.jpeg";
import img5 from "../assets/horsea.jpeg";

export default function PlayMusic() {
  const { id } = useParams();
  const parsedId = parseInt(id, 10);
  const navigate = useNavigate();
  
  const [currentId, setCurrentId] = useState(parsedId);

  const tabs = [
    {
      musics: [
        {
          id: 0,
          songTitle: "Faded",
          artistName: "Alan Walker",
          albumImage: img1,
          song: song1,
        },
        {
          id: 1,
          songTitle: "Another Song",
          artistName: "Another Artist",
          albumImage: img2,
          song: song2,
        },
      ],
    },
    {
      musics: [
        {
          id: 2,
          songTitle: "Lazy Day",
          artistName: "Stylish Futuristic Chill",
          albumImage: img3,
          song: song3,
        },
        {
          id: 3,
          songTitle: "Happy Day",
          artistName: "Stylish Futuristic Chill",
          albumImage: img4,
          song: song4,
        },
      ],
    },
    {
      musics: [
        {
          id: 4,
          songTitle: "Nightfall",
          artistName: "Future Bass Music",
          albumImage: img5,
          song: song5,
        },
      ],
    },
  ];

  const allMusics = tabs.flatMap((tab) => tab.musics);
  const music = allMusics.find((music) => music.id === currentId);

  const handleNext = () => {
    const nextId = currentId < allMusics.length - 1 ? currentId + 1 : 0;
    setCurrentId(nextId);
    navigate(`/PlayMusic/${nextId}`);
  };

  const handlePrevious = () => {
    const prevId = currentId > 0 ? currentId - 1 : allMusics.length - 1;
    setCurrentId(prevId);
    navigate(`/PlayMusic/${prevId}`);
  };

  if (!music) {
    return <div>Song not found!</div>;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative h-[800px] w-full flex items-center justify-center rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-70"></div>
        <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 p-10 text-white w-full h-full">
          <div>
            <img
              src={music.albumImage}
              alt="Album"
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold">{music.songTitle}</h2>
              <p className="text-xl">{music.artistName}</p>
            </div>
            <Audio song={music.song} />
            <div className="mt-4 flex justify-between">
              <button
                className="bg-blue-400 hover:bg-blue-500 rounded-full px-2 py-2"
                onClick={handlePrevious}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                />
              </svg>
              </button>
              <button
                className="bg-blue-400 hover:bg-blue-500 rounded-full px-2 py-2"
                onClick={handleNext}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
