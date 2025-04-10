"use client";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import TextareaAutosize from "react-textarea-autosize";
import { db } from "@/app/commons/firebase/firebase";
import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, FormEvent, useEffect } from "react";
import AddPostBtns from "../../__molecules/AddPostBtns/AddPostBtns";
import { useImgUpload } from "@/app/commons/store/store";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function AddPostForm() {
  const [user] = useAuthState(auth);
  const [value, setvalue] = useState("");
  const [url, setUrl] = useState("");
  const imgUrl = useImgUpload((state) => state.imgUrl);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUrl(imgUrl);
  }, [imgUrl]);

  useEffect(() => {
    const UserId = getAuth();
    onAuthStateChanged(UserId, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);
  console.log(userId);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const docRef = doc(collection(db, "post"));
      await setDoc(docRef, {
        userPost: value,
        userName: user?.displayName,
        created_at: serverTimestamp(),
        likes: 0,
        id: docRef.id,
        userId: userId,
        imgUrl: url,
        userEmail: user?.email,
      });
      setvalue("");
      setUrl("");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <TextareaAutosize
          name=""
          className="w-full bg-transparent placeholder:text-[21px] text-[20px] resize-none overflow-hidden text-white h-auto outline-none py-1"
          placeholder={"What's happening?"}
          value={value}
          minRows={2}
          maxRows={10}
          maxLength={280}
          onChange={(e) => setvalue(e.target.value)}
          id=""
        />
        <AddPostBtns value={value} url={url} />
      </form>
    </>
  );
}

export default AddPostForm;
