import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Smile-F</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="text-cyan-400 font-bold">Projects</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
