"use client";
import EmojiIcon from "@/app/commons/icons/AddPostIcons/EmojiIcon";
import GifIcon from "@/app/commons/icons/AddPostIcons/GifIcon";
import LocationIcon from "@/app/commons/icons/AddPostIcons/LocationIcon";
import PollIcon from "@/app/commons/icons/AddPostIcons/Pollicon";
import ScheduleIcon from "@/app/commons/icons/AddPostIcons/ScheduleIcon";
import Image from "next/image";
import Grok from "@/app/commons/icons/sideBarIcons/Grok";
import UploadPage from "../imgBB/ImgBB";
type value = {
  value: string;
  url: string;
};
function AddPostBtns({ value, url }: value) {
  const BtnArr = [
    <GifIcon />,
    <Grok className="text-[#f91880] w-5" />,
    <PollIcon />,
    <EmojiIcon />,
    <ScheduleIcon />,
    <LocationIcon />,
  ];

  return (
    <>
      {url !== "" && (
        <div className="">
          <Image
            src={url}
            alt={"image"}
            width={300}
            height={200}
            className="w-full h-auto rounded-[15px] rounded-tr-[15px] mb-6"
          />
        </div>
      )}
      <div className="w-full flex justify-between items-center border-t-[1px] border-bordercolor py-2">
        <div className="flex gap-4 items-center">
          <UploadPage />
          {BtnArr.map((btn, index) => {
            return (
              <div className="" key={index}>
                {btn}
              </div>
            );
          })}
        </div>
        <div className="">
          <button
            disabled={!value}
            className={` text-black ${
              !value ? "bg-[#ffffffb0]" : "bg-white"
            }  w-[66px] h-9 rounded-full`}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPostBtns;
