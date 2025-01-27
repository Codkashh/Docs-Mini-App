import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference, isDarkMode }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      whileDrag={{ scale: 1.2 }}
      className={`flex-shrink-0 relative w-60 h-72 rounded-[45px] overflow-hidden px-8 py-10 ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isDarkMode ? "bg-zinc-600" : "bg-gray-300"
            }`}
          >
            {data.close ? <IoClose /> : <LuDownload size=".7em" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue"
                ? "bg-blue-600"
                : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
