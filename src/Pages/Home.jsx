// import React from 'react'

import Tab from "../Components/Tab";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative h-[800px] w-full flex items-center justify-center rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-70"></div>
        <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 p-10 text-white w-full h-full">
          <Tab />
        </div>
      </div>
    </div>
  );
}

