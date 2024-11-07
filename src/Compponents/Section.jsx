import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Section() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`max-w-[900px] mx-auto h-full ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex justify-between items-center py-4">
        <h1 className="text-[25px]">
          <span className={`font-medium ${isDarkMode ? 'text-[#13AAF8]' : ''}`}>
            SNE
          </span>
          AKER
        </h1>
        <ul className="flex space-x-[60px]">
          <li
            className={`relative hover:text-[#35B8FF] ${
              isDarkMode ? 'hover:text-white' : ''
            }`}
          >
            Home
          </li>
          <li
            className={`relative hover:text-[#35B8FF] ${
              isDarkMode ? 'hover:text-white' : ''
            }`}
          >
            About
          </li>
          <li
            className={`relative hover:text-[#35B8FF] ${
              isDarkMode ? 'hover:text-white' : ''
            }`}
          >
            Success story
          </li>
          <li
            className={`relative hover:text-[#35B8FF] ${
              isDarkMode ? 'hover:text-white' : ''
            }`}
          >
            Community
          </li>
        </ul>
        <button
          className={`w-[120px] h-[35px] rounded-[8px] bg-transparent border-[2px] border-[#35B8FF] text-[16px] transition duration-1000 ease-in-out hover:bg-[#13AAF8] ${
            isDarkMode
              ? 'border-white text-white hover:bg-white hover:text-black'
              : ''
          }`}
          onClick={toggleTheme}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Section;