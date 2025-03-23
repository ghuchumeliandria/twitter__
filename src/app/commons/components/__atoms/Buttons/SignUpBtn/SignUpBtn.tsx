import React from "react";

type props = {
  text: string;
};

function SignUpBtn({ text }: props) {
  return (
    <>
      <div className="w-full   rounded-[20px] ">
        <button className="w-full h-10 bg-white py-2 font-bold rounded-[20px] hover:bg-[#fffc]">
          {text}
        </button>
      </div>
    </>
  );
}
export default SignUpBtn;
