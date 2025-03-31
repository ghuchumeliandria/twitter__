"use client";
import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Twitter() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      router.push("/pages/Twitter");
    }
  }, [user]);
  return (
    <>
      <button onClick={() => signOut(auth)}>salami</button>
      <p>{user?.displayName}</p>
    </>
  );
}

export default Twitter;
