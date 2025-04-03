import TwitterLogo from "@/app/commons/icons/TwitterLogo/TwitterLogo";
import SideBarOptions from "../../__molecules/sideBarOptions/sideBarOptions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/commons/firebase/firebase";
import { signOut } from "firebase/auth";
import MoreDotIcon from "@/app/commons/icons/MoreDotIcon/MoreDotIcon";
function SideBar() {
  const [user] = useAuthState(auth);

  console.log(user?.displayName);
  return (
    <>
      <div className="w-full max-w-[275px] fixed h-full flex flex-col overflow-y-auto gap-2 justify-between pb-6 border-r-[1px] pt-[1.5px]  border-bordercolor pr-12">
        <div className="w-full flex flex-col gap-2">
          <div className="w-[50px] rounded-[50px] cursor-pointer p-2.5 hover:bg-[#181818] max-1290:mx-auto max-1290:w-full max-1290:flex max-1290:justify-end">
            <TwitterLogo className="w-[30px] h-[30px]   " />
          </div>
          <SideBarOptions />
          <button className="w-full bg-white hover:bg-[#ffffffe0] transition-all duration-75 h-[50px] rounded-[30px] text-[18px] font-semibold">
            Post
          </button>
        </div>
        <div className="flex items-center w-full gap-3">
          <div className="">
            <h1 className="text-white">Images</h1>
          </div>
          <div className="">
            <p className="text-white">{user?.displayName}</p>
            <p className="text-textgray2">{user?.email}</p>
          </div>
          {/* <button className="w-full h-10 bg-white" onClick={() => signOut(auth)}>Log out</button> */}

          <MoreDotIcon />
        </div>
      </div>
    </>
  );
}

export default SideBar;
