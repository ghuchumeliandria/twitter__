"use client";
import EmojiIcon from "@/app/commons/icons/AddPostIcons/EmojiIcon";
import GifIcon from "@/app/commons/icons/AddPostIcons/GifIcon";
import LocationIcon from "@/app/commons/icons/AddPostIcons/LocationIcon";
import PollIcon from "@/app/commons/icons/AddPostIcons/Pollicon";
import ScheduleIcon from "@/app/commons/icons/AddPostIcons/ScheduleIcon";
import Image from "next/image";
import Grok from "@/app/commons/icons/sideBarIcons/Grok";
import UploadPage from "../imgBB/ImgBB";
import { useImgUpload } from "@/app/commons/store/store";
import { useEffect, useState } from "react";
type value = {
  value: string;
};
function AddPostBtns({ value }: value) {
  const [url, setUrl] = useState("");
  const imgUrl = useImgUpload((state) => state.imgUrl);

  useEffect(() => {
    setUrl(imgUrl);
  }, [imgUrl]);

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
            src={`${url}`}
            alt={"image"}
            width={1}
            height={1}
            className="w-full object-cover"
          />
        </div>
      )}
      <div className="w-full flex justify-between items-center">
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
            className="bg-white text-black w-[66px] h-9 rounded-full">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPostBtns;
