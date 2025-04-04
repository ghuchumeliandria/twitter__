import Communities from "@/app/commons/icons/sideBarIcons/Communities";
import Grok from "@/app/commons/icons/sideBarIcons/Grok";
import HomeIcon from "@/app/commons/icons/sideBarIcons/homeIcon";
import Messages from "@/app/commons/icons/sideBarIcons/Messages";
import MoreIcon from "@/app/commons/icons/sideBarIcons/MoreIcon";
import NotificationsIcon from "@/app/commons/icons/sideBarIcons/notificationsIcon";
import Premium from "@/app/commons/icons/sideBarIcons/Premium";
import ProfileIcon from "@/app/commons/icons/sideBarIcons/ProfileIcon";
import SearchIcon from "@/app/commons/icons/sideBarIcons/SearchIcon";
import { useState } from "react";
function SideBarOptions() {
  const [ChangeFont, setChangeFont] = useState<number>(0);

  const SideBarBtns = [
    { item: <HomeIcon className="w-7 h-7 " />, text: "Home" },
    { item: <SearchIcon className="w-7 h-7 " />, text: "Search" },
    { item: <NotificationsIcon className="w-7 h-7" />, text: "Notifications" },
    { item: <Messages className="w-7 h-7" />, text: "Messages" },
    { item: <Grok className="w-7 h-7" />, text: "Grok" },
    { item: <Communities className="w-7 h-7" />, text: "Communities" },
    { item: <Premium className="w-7 h-7" />, text: "Premium" },
    { item: <ProfileIcon className="w-7 h-7" />, text: "Profile" },
    { item: <MoreIcon className="w-7 h-7" />, text: "More" },
  ];

  return (
    <>
      <div className="flex flex-col">
        {SideBarBtns.map((item, text) => {
          return (
            <button
              onClick={() => setChangeFont(text)}
              key={item.text}
              className="group flex items-center  hover:bg-[] max-1290:justify-end">
              <div className="group-hover:bg-[#181818] transition-all duration-175 p-2.5 pr-6 rounded-[50px] flex gap-5 max-1290:pr-2.5 ">
                {item.item}
                <h1
                  className={`text-white text-[20px]  ${
                    ChangeFont === text ? "font-bold" : "font-normal"
                  } max-1290:hidden`}>
                  {item.text}
                </h1>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default SideBarOptions;
