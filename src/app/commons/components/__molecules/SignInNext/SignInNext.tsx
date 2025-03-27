import AuthorizationInput from "../../__atoms/AuthorizationInput/AuthorizationInput";

const SignInNext = () => {
  return (
    <>
      <div className="flex flex-col  mx-auto w-full max-w-[440px]">
        <form className="flex flex-col gap-[170px]">
          <div className="flex flex-col gap-7">
            <h1 className="text-[32px] text-[#ffffffcd] font-bold ">
              Enter your password
            </h1>
            <div className="flex flex-col gap-7">
              <div className="w-full  text-[#71767b73] bg-[#161616b6] px-2 py-1.5">
                <p className="text-[14px]">Email</p>
                <h2 className="text-[17px] rounded-[5px]">
                  andriaghurtchumelia4@gmail.com
                </h2>
              </div>
              <div className="">
                <AuthorizationInput
                  type="password"
                  placeholder="Password"
                  className="border-[#333639;] w-full text-[white] outline-none focus:border-[#1d9bf0] text-[18px] placeholder-[#5b6166] border-[1px] rounded-[4px] h-16 pl-2 bg-transparent"
                />
                <p className="text-[#1d9bf0] hover:underline cursor-pointer text-[14px] ml-2">
                  Forgot assword?
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="w-full bg-white text-black text-[17px] font-bold rounded-[20px] h-[52px]">Log In</button>
            <p className="text-[#71767B]">Don't have an Account ? <button className="text-[#1d9bf0] hover:underline">Sign Up</button></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInNext;
