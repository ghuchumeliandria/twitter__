"use client";
import { useState } from "react";
import axios from "axios";
import { useImgUpload } from "@/app/commons/store/store";

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const setImgUrl = useImgUpload((state) => state.setImgUrl);
  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
    if (e.target.files[0]) {
      handleImageUpload();
    }
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

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
    <div>
      <input type="file" onChange={handleImageChange} className="w-2" />
      <div className="text-red-400" onClick={handleImageUpload}>
        Click
      </div>
    </div>
  );
}
