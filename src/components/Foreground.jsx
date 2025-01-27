import React, { useRef } from "react";
import Card from "./Card";

function Foreground({ isDarkMode }) {
  const ref = useRef(null);

  const data = [
    {
      desc: "Find your inner compass.",
      filesize: ".14mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Save it", tagColor: "blue" },
    },
    {
      desc: "The path to enlightenment begins here.",
      filesize: ".21mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Connect with your true self and find inner peace.",
      filesize: ".8mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}

export default Foreground;
