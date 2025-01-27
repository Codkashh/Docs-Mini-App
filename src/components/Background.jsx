import React from "react";

function Background({ isDarkMode }) {
  return (
    <div
      className={`relative w-full h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-zinc-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="w-full top-[5%] py-10 flex justify-center text-xl font-semibold">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold text-[13vw]">
        Docs.
      </h1>
    </div>
  );
}

export default Background;

