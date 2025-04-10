import TwitterLogo from "@/app/commons/icons/TwitterLogo/TwitterLogo";
import AuthorizationCloseBtn from "../../__atoms/Buttons/AuthorizationCloseBtn/AuthorizationCloseBtn ";
import SignIn from "../SignIn/SignIn";
import CreateAccount from "../CreateAccount/page";
import { useVisibility } from "@/app/commons/store/store";
function AuthoriziationHiddenBox() {
  const showSignIn = useVisibility((state) => state.SignIn);
  return (
    <>
      <div className="absolute top-[-40px] left-[-32px] right-[-32px] bottom-[-16px] bg-[#5b708366]"></div>
      <div className="absolute w-[600px] pt-2  top-[-20px] left-1/2 transform -translate-x-1/2 rounded-[15px] bg-black">
        <div className="relative w-full h-full">
          <div className="w-full max-w-[40px] mx-auto mb-6">
            <TwitterLogo className="w-[35px] h-[35px] " />
          </div>
          <AuthorizationCloseBtn />
          {showSignIn ? <SignIn /> : <CreateAccount />}
        </div>
      </div>
    </>
  );
}

export default AuthoriziationHiddenBox;
