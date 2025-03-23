import React from "react";
import AuthorizationPage from "../Authorization/AuthorizationPage";
function MainContainer() {
  return (
    <>
      <div className="w-full min-h-[100vh] bg-bgmain px-8 pt-10 pb-4">
        <AuthorizationPage />
      </div>
    </>
  );
}

export default MainContainer;
