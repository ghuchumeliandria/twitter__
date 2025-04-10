"use client";
import { useState } from "react";
export default function ProfileOptions() {
  const buttonArr = [
    "Posts",
    "Replies",
    "Highlights",
    "Articles",
    "Media",
    "Likes",
  ];

  const [btnIndex, setIndex] = useState(0);
  return (
    <>
      <div className="w-full flex border-b-[1px] border-bordercolor mt-2">
        {buttonArr.map((item, index) => {
          return (
            <div
              onClick={() => setIndex(index)}
              key={index}
              className="flex-1 relative flex justify-center px-3 cursor-pointer items-center hover:bg-[#45494c57]">
              <button
                className={`text-textgray font-semibold relative  py-3 ${
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
