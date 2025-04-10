"use client";
import { useState } from "react";
export default function ProfileOptions() {
  const buttonArr = [
    "posts",
    "Replies",
    "Highlights",
    "Articles",
    "Media",
    "Likes",
  ];

  const [btnIndex, setIndex] = useState(0);
  return (
    <>
      <div className="w-full flex">
        {buttonArr.map((item, index) => {
          return (
            <div key={index} className="flex-1 relative flex justify-center px-3 items-center hover:bg-[#45494c57]">
              <button
                onClick={() => setIndex(index)}
                className={`text-white relative  py-4 ${
                    btnIndex === index
                    ? " text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-full after:h-1 after:bg-pink-500 after:rounded-full after:-translate-x-1/2"
                    : "text-textgray"
                } `}>
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
