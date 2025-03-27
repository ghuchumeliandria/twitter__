import React from "react";
import SignUpBtn from "../../__atoms/Buttons/SignUpBtn/SignUpBtn";
import OrElement from "../../__atoms/OrElement/OrElement";
import AuthorizationInput from "../../__atoms/AuthorizationInput/AuthorizationInput";
import SignInNext from "../SignInNext/SignInNext";
import { useVisibility } from "@/app/commons/store/store";

function SignIn() {
  const signInNext = useVisibility((state) => state.SignInNext);
  const SignInNextVisibility = useVisibility(
    (state) => state.SignInNextVisibility
  );
  return (
    <>
      {signInNext ? (
        <SignInNext />
      ) : (
        <div className="flex flex-col gap-[10px] w-full max-w-[364px] px-8 pb-[42px] mx-auto">
          <div className="">
            <h1 className="text-[31px] font-bold text-white mb-6">
              Sign in to X
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <SignUpBtn text="Sign up with Google" />
            <SignUpBtn text={"Sign up with Apple"} />
          </div>
          <OrElement />
          <div className="w-full flex flex-col">
            <AuthorizationInput
            type="text"
              placeholder="Phone,email,or username"
              className="border-[#333639;] mb-8 text-[white] outline-none focus:border-[#1d9bf0] text-[18px] placeholder-[#5b6166] border-[1px] rounded-[4px] h-14 pl-2 bg-transparent"
            />

            <SignUpBtn text="Next" func={SignInNextVisibility} />
            <button className="border-[#5e656b;] text-white outline-none border-[1px] rounded-[20px] py-2 mt-6">
              Forgor Password?
            </button>
          </div>
          <p className="text-[#5b6166] mt-11">
            Don't have an account?
            <button className="text-[#1d9bf0] hover:underline">Sign up</button>
          </p>
        </div>
      )}
    </>
  );
}

export default SignIn;
