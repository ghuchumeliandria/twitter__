"use client";
import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SideBar from "@/app/commons/components/__organisms/SideBar/SideBar";
import ForYou from "@/app/commons/components/__organisms/ForYou/ForYou";
import Loading from "@/app/commons/components/__atoms/Loading/Loading";

function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
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
      {/* Loading */}
      {showLoading && <Loading />}

      <div className="w-full bg-black min-h-[100vh] flex">
        <div className="w-full flex max-w-[1260px] mx-auto relative">
          <SideBar index={0} />
          <ForYou />
        </div>
      </div>
    </>
  );
}

export default Home;
