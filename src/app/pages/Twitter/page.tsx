"use client";
import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect , useState } from "react";
import SideBar from "@/app/commons/components/__organisms/SideBar/SideBar";
function Twitter() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const [showLoading, setShowLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!loading) {
        setShowLoading(false)
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

      <div className="w-full bg-black min-h-[100vh]">
        <div className="w-full max-w-[1260px] mx-auto relative">
            <SideBar />
        </div>
      </div>

      {/* <button onClick={() => signOut(auth)}>salami</button>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p> */}
    </>     
  );
}

export default Twitter;
