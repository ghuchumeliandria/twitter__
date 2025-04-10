"use client";
import Loading from "@/app/commons/components/__atoms/Loading/Loading";
import ProfileSide from "@/app/commons/components/__organisms/ProfileSide/ProfileSide";
import SideBar from "@/app/commons/components/__organisms/SideBar/SideBar";
import UserSide from "@/app/commons/components/__organisms/UsersSide/UsersSide";
import { auth } from "@/app/commons/firebase/firebase";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function Profile() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  console.log(user);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!loading) {
      setShowLoading(false);
      if (!user) {
        router.push("/");
      }
    }
  }, [user, loading]);
  return (
    <>
      {showLoading && <Loading />}
      <div className="w-full bg-black min-h-screen flex">
        <div className="w-full flex max-w-[1260px] mx-auto relative">
          <SideBar index={7} />
          <ProfileSide />
          <UserSide />
        </div>
      </div>
    </>
  );
}

export default Profile;
