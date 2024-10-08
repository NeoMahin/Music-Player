import { useState } from "react";
import Musics from "../Components/Musics";
import img1 from '../assets/Untitled.jpeg'
import img2 from '../assets/octopus.jpeg'
import img3 from '../assets/shark.jpeg'
import img4 from '../assets/jelly.jpeg'
import img5 from '../assets/horsea.jpeg'


export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [favorites, setFavorites] = useState({});

  const handleFavoriteToggle = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  
  const tabs = [
    {
      label: "Recent",
      content: "You may like this",
      musics: [
        {
          id: 0,
          songTitle: "Faded",
          artistName: "Alan Walker",
          albumImage: img1

        },
        {
          id: 1,
          songTitle: "Another Song",
          artistName: "Another Artist",
          albumImage: img2,

        },
      ],
    },
    {
      label: "Most played",
      content: "Your most played songs",
      musics: [
        {
          id: 0,
          songTitle: "Faded",
          artistName: "Alan Walker",
          albumImage:img1,

        },
        {
          id: 2,
          songTitle: "Lazy Day",
          artistName: "Stylish Futuristic Chill",
          albumImage: img3

        },
        {
          id: 3,
          songTitle: "Happy Day",
          artistName: "Stylish Futuristic Chill",
          albumImage: img4

        },
      ],
    },
    {
      label: "Rock",
      content: "Rock metal songs for you",
      musics: [
        {
          id: 4,
          songTitle: "Nightfall",
          artistName: "Future Bass Music",
          albumImage: img5

        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10">

      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 text-center py-2 px-4 font-medium text-lg cursor-pointer focus:outline-none ${
              activeTab === index
                ? "bg-blue-300/50 text-slate-200"
                : "bg-transparent"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>


      <div className="py-4">
        <p className="text-lg">{tabs[activeTab].content}</p>
        <ul>
          {tabs[activeTab].musics.map((music) => (
            <li key={music.id} className="text-lg">
              <Musics
                {...music}
                isActive={favorites[music.id]}
                onFavoriteToggle={() => handleFavoriteToggle(music.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
