import React from "react";
import TwitterLogo from "@/app/commons/icons/TwitterLogo/TwitterLogo";
import Authorization from "@/app/commons/components/__organisms/Authorization/Authorization";
import AuthorizationFooter from "@/app/commons/components/__molecules/AuthorizationFooter/AuthorizationFooter";
function AuthorizationPage() {
  return (
    <>
      <div className="flex flex-col w-full gap-20 ">
        <div className="w-full  flex mx-auto   items-center justify-between  max-[1010px]:flex-col  max-[1010px]:gap-12 max-[1010px]:px-0 max-[1010px]:max-w-[543px]  ">
          <div className="flex justify-center  flex-1 max-[1010px]:w-full max-[1010px]:justify-start">
            <TwitterLogo />
          </div>
          <Authorization />
        </div>
        <AuthorizationFooter />
      </div>
    </>
  );
}

export default AuthorizationPage;
