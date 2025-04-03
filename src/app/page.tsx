"use client";
import MainContainer from "./pages/MainContainer/MainContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/commons/firebase/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const router = useRouter();

  console.log(user);
  useEffect(() => {
    if (loading) {
      setShowLoading(false);
    }
    if (user) {
      setTimeout(() => router.push("/pages/Twitter"), 500);
    } else {
      setTimeout(() => router.push("/"), 500);
    }
  }, [user, loading]);

  return (
    <>
      <div className="relative">
        {showLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10 flex justify-center items-center">
            <p className="text-white">loading...</p>
          </div>
        )}

        <MainContainer />
      </div>
    </>
  );
}
