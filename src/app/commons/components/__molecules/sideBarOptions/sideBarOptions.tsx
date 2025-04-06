"use client";
import Communities from "@/app/commons/icons/sideBarIcons/Communities";
import Grok from "@/app/commons/icons/sideBarIcons/Grok";
import HomeIcon from "@/app/commons/icons/sideBarIcons/homeIcon";
import Messages from "@/app/commons/icons/sideBarIcons/Messages";
import MoreIcon from "@/app/commons/icons/sideBarIcons/MoreIcon";
import NotificationsIcon from "@/app/commons/icons/sideBarIcons/notificationsIcon";
import Premium from "@/app/commons/icons/sideBarIcons/Premium";
import ProfileIcon from "@/app/commons/icons/sideBarIcons/ProfileIcon";
import SearchIcon from "@/app/commons/icons/sideBarIcons/SearchIcon";
import { sideBarIndex } from "@/app/commons/types/types";
import { useState } from "react";
import {
  HomePath,
  NotificationPath,
  ProfilePath,
  SearchPath,
  MessagesPath,
  GrokPath,
  CommunitiesPath,
  PremiumPath,
  MorePath,
} from "@/app/commons/functions/functions";
function SideBarOptions({ index }: sideBarIndex) {
  const [ChangeFont, setChangeFont] = useState<number>(index);

  // sidebar buttons functions
  const homePath = HomePath();
  const notificationPath = NotificationPath();
  const profilePath = ProfilePath();
  const searchPath = SearchPath();
  const messagesPath = MessagesPath();
  const grokPath = GrokPath();
  const communitiesPath = CommunitiesPath();
  const premiumPath = PremiumPath();
  const morePath = MorePath();
  // sidebar buttons array
  const SideBarBtns = [
    { item: <HomeIcon className="w-7 h-7 " />, text: "Home", func: homePath },
    {
      item: <SearchIcon className="w-7 h-7 " />,
      text: "Search",
      func: searchPath,
    },
    {
      item: <NotificationsIcon className="w-7 h-7" />,
      text: "Notifications",
      func: notificationPath,
    },
    {
      item: <Messages className="w-7 h-7" />,
      text: "Messages",
      func: messagesPath,
    },
    { item: <Grok className="w-7 h-7" />, text: "Grok", func: grokPath },
    {
      item: <Communities className="w-7 h-7" />,
      text: "Communities",
      func: communitiesPath,
    },
    {
      item: <Premium className="w-7 h-7" />,
      text: "Premium",
      func: premiumPath,
    },
    {
      item: <ProfileIcon className="w-7 h-7" />,
      text: "Profile",
      func: profilePath,
    },
    { item: <MoreIcon className="w-7 h-7" />, text: "More", func: morePath },
  ];

  return (
    <>
      <div className="flex flex-col">
        {SideBarBtns.map((item, index) => {
          return (
            <button
              onClick={() => {
                setChangeFont(index);
                item.func && item.func();
              }}
              key={item.text}
              className="group flex items-center  hover:bg-[] max-1290:justify-end">
              <div className="group-hover:bg-[#181818] transition-all duration-175 p-2.5 pr-6 rounded-[50px] flex gap-5 max-1290:pr-2.5 ">
                {item.item}
                <h1
                  className={`text-white text-[20px]  ${
                    ChangeFont === index ? "font-bold" : "font-normal"
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
