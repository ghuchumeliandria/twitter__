import { useVisibility } from "@/app/commons/store/store";
import React from "react";

function CreateAccBtn() {
  const CreateAccVisibility = useVisibility((state) => state.CreateAccVisibility)
  return (
    <>
      <button
        onClick={CreateAccVisibility}
        className="w-full  h-10 bg-[#1d9bf0] rounded-[20px] text-white hover:bg-[#1d9cf0d3]">
        Create account
      </button>
    </>
  );
}
export default CreateAccBtn;
