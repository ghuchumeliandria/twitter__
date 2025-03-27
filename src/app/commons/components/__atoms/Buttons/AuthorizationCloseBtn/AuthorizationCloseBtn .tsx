import { useVisibility } from "@/app/commons/store/store";
import React from "react";
function AuthorizationCloseBtn() {

  const CloseBtn = useVisibility((state) => state.CloseBtn)

  return (
    <>
      <button
        onClick={CloseBtn}
        className="text-[#ffffffc9] text-[17px] font-bold absolute top-3 left-5">
        X
      </button>
    </>
  );
}

export default AuthorizationCloseBtn;
