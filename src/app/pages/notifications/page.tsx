"use client";
import Loading from "@/app/commons/components/__atoms/Loading/Loading";
import SideBar from "@/app/commons/components/__organisms/SideBar/SideBar";
import { auth } from "@/app/commons/firebase/firebase";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function Notification() {
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
        <Loading />
      )}
      <div className="w-full bg-black min-h-[100vh]">
        <div className="w-full max-w-[1260px] mx-auto relative">
          <SideBar index={2} />
        </div>
      </div>
    </>
  );
}

export default Notification;
