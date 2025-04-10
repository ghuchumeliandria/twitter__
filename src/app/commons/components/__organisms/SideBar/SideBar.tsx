"use client";
import TwitterLogo from "@/app/commons/icons/TwitterLogo/TwitterLogo";
import SideBarOptions from "../../__molecules/sideBarOptions/sideBarOptions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/commons/firebase/firebase";
import MoreDotIcon from "@/app/commons/icons/MoreDotIcon/MoreDotIcon";
import { signOut } from "firebase/auth";
import { sideBarIndex } from "@/app/commons/types/types";
import { useState } from "react";
function SideBar({ index }: sideBarIndex) {
  const [user] = useAuthState(auth);
  const [showLogOut, setShowLogOut] = useState(false);

  return (
    <>
      <div className="w-full  max-w-[295px]">
        <div className=" w-full max-w-[295px]  sticky h-full flex flex-col overflow-y-auto gap-2  pb-6 border-r-[1px] pt-[1.5px]  border-bordercolor ">
          <div className="w-full flex flex-col gap-2 pr-8">
            <div className="w-full flex max-1290:justify-end">
              <div className="w-[50px] rounded-[50px] cursor-pointer p-2.5  hover:bg-[#181818]   ">
                <TwitterLogo className="w-[30px] h-[30px]   " />
              </div>
            </div>
            <SideBarOptions index={index} />
            <div className="w-full flex justify-end">
              <button className="w-full bg-white hover:bg-[#ffffffe0] transition-all duration-75 h-[50px] rounded-[30px] text-[18px] font-semibold max-1290:w-[50px] max-1290:h-[50px]">
                Post
              </button>
            </div>
          </div>
          <div className="w-full mt-4 flex justify-end max-1290:pr-4">
            <button
              onClick={() => setShowLogOut(!showLogOut)}
              className="flex w-full items-center relative  gap-3 hover:bg-[#181818] p-3 rounded-[50px] cursor-pointer mr-2 ">
              <div className="w-[40px] h-[40px] bg-blue-800 pb-3 pl-1 rounded-[50px] flex justify-center items-center">
                <p className="text-[25px]  text-white">
                  {user?.email?.charAt(0)}
                </p>
              </div>
              <div className="flex flex-col items-start max-1290:hidden">
                <p className="text-white">{user?.displayName}</p>
                <p className="text-textgray2">{user?.email}</p>
              </div>
              {showLogOut && (
                <div
                  style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.864)" }}
                  onClick={() => signOut(auth)}
                  className="absolute text-white p-3 w-[30%] bg-[black]   rounded-[10px] top-[-50px] left-1/2 transform -translate-x-1/2 ">
                  Log out
                </div>
              )}
              <MoreDotIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
