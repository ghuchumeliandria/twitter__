import React from "react";

type props = {
  text: string;
  func? : () => void
};

function SignUpBtn({ text , func }: props) {
  return (
    <>
      <div className="w-full rounded-[20px] ">
        <button
          className="w-full h-10 bg-white py-2 font-bold rounded-[20px] hover:bg-[#fffc]"
          onClick={func}
          >
          {text}
        </button>
      </div>
    </>
  );
}
export default SignUpBtn;
