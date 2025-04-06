import { useState } from "react";

function ForYouHeader() {
  const BtnArr = ["For you", "Following"];
  const [btnIndex, setBtnIndex] = useState(0);
  return (
    <>
      <div className="w-full flex  border-b-[1px] border-r-[1px] border-bordercolor ">
        {BtnArr.map((item, index) => {
          return (
            <div
              key={item}
              onClick={() => setBtnIndex(index)}
              className="flex-1 flex justify-center pt-4 items-center hover:bg-[#181818] cursor-pointer transition-all duration-300">
              <button
                className={`text-textgray2 text-[14px] pb-4 relative font-bold   ${
                  btnIndex === index
                    ? " text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-full after:h-1 after:bg-pink-500 after:rounded-full after:-translate-x-1/2"
                    : ""
                }   `}>
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ForYouHeader;
