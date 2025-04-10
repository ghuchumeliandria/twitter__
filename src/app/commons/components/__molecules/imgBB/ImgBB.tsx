"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useImgUpload } from "@/app/commons/store/store";
import ImageIcon from "@/app/commons/icons/AddPostIcons/ImageIcon";

export default function UploadPage() {
  const image = useImgUpload((state) => state.img);
  const setImage = useImgUpload((state) => state.setImg);
  const setImgUrl = useImgUpload((state) => state.setImgUrl);

  const handleImageChange = async (e: any) => {
    const img = e.target.files[0];

    if (!img) return;

    setImage(img);

    const formData = new FormData();
    formData.append("image", img);

    try {
      console.log(formData);

      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=" +
          process.env.NEXT_PUBLIC_FIREBASE_API_KEY2,
        formData
      );
      setImgUrl(res.data.data.url);
      console.log("Image URL: ", res.data.data.url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  return (
    <div className="flex gap-2">
      <label htmlFor="file" className="text-red-400 cursor-pointer">
        <input
          type="file"
          onChange={handleImageChange}
          className="hidden"
          id="file"
        />
        <ImageIcon />
      </label>
    </div>
  );
}
