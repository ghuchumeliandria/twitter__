import React from "react";
import SignUpBtn from "../../__atoms/Buttons/SignUpBtn/SignUpBtn";
import CreateAccBtn from "../../__atoms/Buttons/CreateAccBtn/CreateAccBtn";
function SignupOptions() {
  return (
    <>
      <div className="flex flex-col  w-full max-w-[310px] ">
        <h2 className="font-bold mb-8 text-white text-[32px] max-[450px]:text-[23px] max-[450px]:mb-6">Join today.</h2>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-2">
            <SignUpBtn text="Sign up with Google" />
            <SignUpBtn text={"Sign up with Apple"} />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[135px] bg-[#555255] h-[1px]"></div>
            <p className="text-white">or</p>
            <div className="w-[135px] bg-[#555255] h-[1px]"></div>
          </div>
          <CreateAccBtn />
          <p className="text-[12px] leading-3 text-[#71767b]">
            By signing up, you agree to the{" "}
            <span className="text-[#1d9bf0] hover:underline cursor-pointer">Terms of Service</span>
            and <span className="text-[#1d9bf0] hover:underline cursor-pointer">Privacy Policy</span>,
            including <span className="text-[#1d9bf0] hover:underline cursor-pointer">Cookie use</span>.
          </p>
        </div>
      </div>
    </>
  );
}
export default SignupOptions;
