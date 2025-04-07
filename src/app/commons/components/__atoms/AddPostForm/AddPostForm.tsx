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
import { useState, FormEvent } from "react";
import AddPostBtns from "../../__molecules/AddPostBtns/AddPostBtns";
import { useImgUpload } from "@/app/commons/store/store";
function AddPostForm() {
  const [user] = useAuthState(auth);
  const [value, setvalue] = useState("");
  const { url } = useImgUpload();
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
        imgUrl: url,
      });
      console.log(docRef.id);
      setvalue("");
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
        <AddPostBtns value={value} />
      </form>
    </>
  );
}

export default AddPostForm;
