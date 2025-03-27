import React from "react";
import SignupOptions from "../../__molecules/SignUpOptions/SignUpOptions";
import { useVisibility } from "@/app/commons/store/store";

function Authorization() {

  const SignInVisibility = useVisibility((state) => state.SignInVisibility);

  return (
    <>
      <div className="max-w-[543px] w-full flex justify-start mr-[90px] flex-col gap-11 flex-1 max-[450px]:gap-6 max-[1010px]:mr-0">
        <h1 className="text-white w-[543px] text-[70px] font-bold max-[1010px]:w-[300px] leading-[92px] max-[450px]:text-[40px]  max-[400px]:w-[200px] max-[400px]:leading-[50px] ">
          Happening now
        </h1>
        <SignupOptions />
        <div className="w-full max-w-[310px] flex flex-col gap-5 max-[450px]:mt-8">
          <h2 className="text-[17px] font-bold text-white">
            Already have an account?
          </h2>
          <button
            onClick={SignInVisibility}
            className="w-full border-[1px] border-[#536471] text-[#1d9bf0] h-10 rounded-[20px] hover:bg-[#1d9cf02a]">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
export default Authorization;
