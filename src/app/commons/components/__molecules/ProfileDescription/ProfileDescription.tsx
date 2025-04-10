"use client";
import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import CalendarIcon from "@/app/commons/icons/Calendar/CalendarIcon";
import VerifiedIcon from "@/app/commons/icons/Verified/VerifiedIcon";
export default function ProfileDescription() {
  const [user] = useAuthState(auth);
  const [userDate, setUserDate] = useState<string>("");

  useEffect(() => {
    const userAuth = getAuth();
    onAuthStateChanged(userAuth, (user) => {
      if (user && user.metadata.creationTime) {
        setUserDate(user.metadata.creationTime);
      }
    });
  }, []);
  return (
    <>
      <div className="w-full py-2 px-4">
        <div className="w-full flex justify-end">
          <button className="text-[17px] text-white px-4 py-1 rounded-full border-[2px] border-bordercolor hover:bg-[#2a3e6258] transition-all duration-300">
            Edit Profile
          </button>
        </div>
        <div className="mt-7">
          <div className="">
            <div className="flex gap-2 items-center">
              <h1 className="text-white text-[21px] font-semibold  gap-2">
                {user?.displayName}
              </h1>
              <button className="flex items-center mt-1 gap-1 h-6 text-[14px] font-semibold border-[1px] text-white border-bordercolor px-3 rounded-full cursor-pointer hover:bg-[#2a3e6258] transition-all duration-300">
                {" "}
                <VerifiedIcon /> Get verified
              </button>
            </div>
            <p className="text-textgray text-[17px] ">{user?.email}</p>
          </div>
          <div className="text-white mt-3 flex flex-col gap-2">
            <p>Bio</p>
            <p className="text-textgray flex items-center gap-1.5">
              {" "}
              <CalendarIcon />
              Joined {userDate.slice(8, 17)}
            </p>
            <div className="flex gap-2">
              <p>
                0 <span className="text-textgray text-[14px]">Following</span>
              </p>
              <p>
                0 <span className="text-textgray text-[14px]">Followers</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
