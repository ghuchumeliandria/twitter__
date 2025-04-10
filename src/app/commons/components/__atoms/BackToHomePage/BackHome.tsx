import ArrowIcon from "@/app/commons/icons/ArrowIcon/ArrowIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/commons/firebase/firebase";
import { useRouter } from "next/navigation";
function BackHome() {
  const [user] = useAuthState(auth);
    const router = useRouter()
  const GoBackHome = () =>{
    router.push('/pages/Home')
  }
  return (
    <>
      <div className="w-full flex gap-9 items-center px-5 border-b-[1px] border-bordercolor pb-1">
        <button onClick={GoBackHome}>
          <ArrowIcon />
        </button>
        <div className="">
          <h1 className="text-[21px] text-white font-semibold">
            {user?.displayName}
          </h1>
          <p className="text-textgray text-[13px] ">5 posts</p>
        </div>
      </div>
    </>
  );
}
export default BackHome;
