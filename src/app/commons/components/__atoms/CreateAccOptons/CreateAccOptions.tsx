import React from "react";
import { useState } from "react";
type optionsProps = {
  className: string;
  arr: (string | number)[];
};
function CreateAppOptions({ className, arr }: optionsProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div
        className={`relative   text-white w-full ${className} outline-none  pt-6 pb-2 px-2.5 bg-transparent border-[1px] rounded-[4px] ${
          isFocused
            ? "border-[#1d9bf0] text-[#1d9bf0] "
            : " border-[#71767b73] "
        }  `}>
        <select
          name=""
          className={`w-full cursor-pointer  bg-bgmain outline-none ${
            isFocused ? "text-[#1d9bf0]" : "text-[#71767b]"
          } `}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value == "")}
          id="">
          {arr.map((item) => {
            return <option className="cursot-pointer" value="option">{item}</option>;
          })}
        </select>
        <label
          className={`absolute  left-2 top-1 text-[13px] ${
            isFocused ? "text-[#1d9bf0]" : "text-[#71767b]"
          }`}>
          Month
        </label>
      </div>
    </>
  );
}
export default CreateAppOptions;
