"use client";
import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SideBar from "@/app/commons/components/__organisms/SideBar/SideBar";
import ForYou from "@/app/commons/components/__organisms/ForYou/ForYou";

function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [showLoading, setShowLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchItem = async () => {
  //     const querySnapShot = await getDocs(collection(db, "post"));
  //     setItem(querySnapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   fetchItem();
  // }, [item]);

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
      {showLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10 flex justify-center items-center">
          <p className="text-white">loading...</p>
        </div>
      )}

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
