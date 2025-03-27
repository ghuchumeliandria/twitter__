"use client";

import React from "react";
import TwitterLogo from "@/app/commons/icons/TwitterLogo/TwitterLogo";
import Authorization from "@/app/commons/components/__organisms/Authorization/Authorization";
import AuthorizationFooter from "@/app/commons/components/__molecules/AuthorizationFooter/AuthorizationFooter";
import { useVisibility } from "@/app/commons/store/store";
import AuthoriziationHiddenBox from "@/app/commons/components/__molecules/AuthoriziationHiddenBox/AuthoriziationHiddenBox";

function AuthorizationPage() {
  const AuthorizationBox = useVisibility((state) => state.AuthorizationBox);

  return (
    <>
      <div className="flex flex-col w-full gap-20 relative ">
        <div className="w-full  flex mx-auto   items-center justify-between  max-[1010px]:flex-col  max-[1010px]:gap-12 max-[1010px]:px-0 max-[1010px]:max-w-[543px]  ">
          <div className="flex justify-center  flex-1 max-[1010px]:w-full max-[1010px]:justify-start">
            <TwitterLogo className="w-[300px] h-[270px] max-[1010px]:w-10  max-[1010px]:h-10" />
          </div>
          <Authorization />
        </div>
        <AuthorizationFooter />

        {AuthorizationBox && <AuthoriziationHiddenBox />}
      </div>
    </>
  );
}

export default AuthorizationPage;
