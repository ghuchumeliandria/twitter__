"use client";
import MainContainer from "./pages/MainContainer/MainContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/commons/firebase/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./commons/components/__atoms/Loading/Loading";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const router = useRouter();

  console.log(user);
  useEffect(() => {
    if (loading) return;
    if (user) {
      setTimeout(() => router.push("pages/Home"));
    } else {
      setTimeout(() => router.push("/"));
    }
    setShowLoading(false);
  }, [user, loading]);

  return (
    <>
      <div className="relative">
        {showLoading && (
          <Loading/>
        )}

        <MainContainer />
      </div>
    </>
  );
}
