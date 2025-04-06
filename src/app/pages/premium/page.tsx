"use client";
import SideBar from "@/app/commons/components/__organisms/SideBar/SideBar";
import { auth } from "@/app/commons/firebase/firebase";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function Premium() {
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
      {showLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10 flex justify-center items-center">
          <p className="text-white">loading...</p>
        </div>
      )}
      <div className="w-full bg-black min-h-[100vh]">
        <div className="w-full max-w-[1260px] mx-auto relative">
          <SideBar index={6} />
        </div>
      </div>
    </>
  );
}

export default Premium;
