import React, { useState } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative w-full h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-zinc-800" : "bg-gray-200"
      }`}
    >

      <div className="absolute top-5 right-5 z-10">
        <button
          onClick={toggleTheme}
          className={`w-14 h-8 flex items-center rounded-full p-1 shadow-lg ${
            isDarkMode ? "bg-blue-600" : "bg-gray-400"
          }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
              isDarkMode ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      <Background isDarkMode={isDarkMode} />
      <Foreground isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
