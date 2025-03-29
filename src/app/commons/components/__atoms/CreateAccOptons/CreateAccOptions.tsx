import React from "react";
import { useState } from "react";
function CreateAppOptions() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div
        className={`relative  pt-6 pb-2 px-2.5 bg-transparent border-[1px] rounded-[4px] ${
          isFocused ? "border-[#1d9bf0]  " : " border-[#71767b76]"
        }  `}>
        <select
          name=""
          className={`w-full outline-none bg-transparent ${
            isFocused ? "text-[#1d9bf0]" : "text-[#1d9bf0]"
          }`}
          id="">
          ravi ylaba
          <option value="option1">ravi aba</option>
        </select>
      </div>
    </>
  );
}
export default CreateAppOptions;
