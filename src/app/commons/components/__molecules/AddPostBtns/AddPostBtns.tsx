"use client";
import EmojiIcon from "@/app/commons/icons/AddPostIcons/EmojiIcon";
import GifIcon from "@/app/commons/icons/AddPostIcons/GifIcon";
import ImageIcon from "@/app/commons/icons/AddPostIcons/ImageIcon";
import LocationIcon from "@/app/commons/icons/AddPostIcons/LocationIcon";
import PollIcon from "@/app/commons/icons/AddPostIcons/Pollicon";
import ScheduleIcon from "@/app/commons/icons/AddPostIcons/ScheduleIcon";
import Image from "next/image";
import Grok from "@/app/commons/icons/sideBarIcons/Grok";
import { useEffect, useState } from "react";
import { useImgUpload } from "@/app/commons/store/store";

type value = {
  value: string;
};

function AddPostBtns({ value }: value) {
  const { setFile, url } = useImgUpload();

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
      {url && (
        <div className="">
          <Image src={url} alt={url} width={1} height={1} className="w-full " />
        </div>
      )}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <input
            type="file"
            className="w-4 text-white"
            onChange={(e) => setFile(e.target.files[0])}
          />
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
