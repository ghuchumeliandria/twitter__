import React, { useState } from "react";
interface inputPros {
  placeholder: string;
  inputValue? : string;
  value : string,
  Change : (value : string) => void
  type : string
}

function CreateAccInput({ placeholder , inputValue , value , Change , type }: inputPros) {
    const [isFocused,setIsFocused] = useState(false)
  return (
    <>
      <div className={`relative w-full pt-6 pb-2 px-2.5 bg-transparent border-[1px] rounded-[4px] ${isFocused ? 'border-[#1d9bf0]  ' : ' border-[#71767b76]' }  `}>
        <input
          type={type}
          placeholder=" "
          className="w-full text-white bg-transparent outline-none text-[17px] "
          value={value}
          onChange={(e) => Change(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== '')}
          maxLength={50}
        />
        <label className={` transition-all absolute  ${isFocused ?  'text-[#1d9bf0] left-2.5 top-2 text-[12px]' :'text-textgray text-[17px] left-2.5 top-4' }  `}>
          {placeholder}
        </label>
        <label className="absolute  top-1 right-2 text-[14px] text-[#71767b]">{inputValue}</label>
      </div>
    </>
  );
}

export default CreateAccInput;
