import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function ProfilePictures() {
    const [user] = useAuthState(auth)
  return (
    <>
      <div className="w-full h-[200px] relative bg-[#3e4144d2]">
        <div className="w-[133px] flex justify-center items-center h-[133px] rounded-full border-[4px] border-black bg-blue-500 absolute bottom-[-60px] left-4">
            <h1 className="text-white font-semibold text-[70px] pb-5 ">{user?.displayName?.charAt(0)} </h1>
        </div>
      </div>
    </>
  );
}

export default ProfilePictures;
