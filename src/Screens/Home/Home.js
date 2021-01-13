import React from 'react';
import { Link } from 'react-router-dom';
import bgimage from '../../Assets/background.png';

function Home() {
  return (
    <div
      className="w-full h-screen bg-center bg-no-repeat bg-cover bg-fixed z-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${bgimage})`
      }}>
      <div>
        <div className="z-10 flex flex-row gap-x-8 z-10 pt-5 pl-10">
          <div className="text-2xl text-white font-bold">
            <Link to="/">Home</Link>
          </div>
          <div className="text-2xl text-gray-500">
            <Link to="/">Portfolio</Link>
          </div>
        </div>
        <div className="text-center z-10" style={{ padding: '10%' }}>
          <p className="font-sans text-5xl text-white">Hello.</p>
          <p className="font-sans text-5xl text-white mt-3">I am Hakan.</p>
          <p className="font-sans text-2xl text-white mt-5">a Frontend developer.</p>
        </div>
        <div className="flex flex-row gap-x-4 fixed bottom-5 left-10">
          <div className="text-white underline font-bold text-xl">
            <a href="https://github.com/hakanalpp">GitHub</a>
          </div>
          <div className="text-white underline font-bold text-xl">
            <a href="https://www.linkedin.com/in/hakan-alpp/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
