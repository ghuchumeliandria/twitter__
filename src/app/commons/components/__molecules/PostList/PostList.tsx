"use client";
import { useEffect, useRef, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import Image from "next/image";
import { auth, db } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import PostInteractions from "../postInteractions/PostInteractions";
import Loading from "../../__atoms/Loading/Loading";
import { ForYouList } from "@/app/commons/types/types";
import DeleteIcon from "@/app/commons/icons/DeleteIcon/DeleteIcon";
import DeletePost from "../../__atoms/DeletePost/DeletePost";

function PostList() {
  const [isVisible, setIsVisible] = useState("");
  const divRef = useRef(null);
  const [list, setList] = useState<ForYouList[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const collectionRef = collection(db, "post");
    const q = query(collectionRef, orderBy("created_at", "desc"));

    const querySnapShot = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setList(posts);
      setShowLoading(false);
    });

    return () => querySnapShot();
  }, []);

  return (
    <>
      <div className="flex flex-col border-r-[1px] border-bordercolor ">
        {showLoading && <Loading />}
        {list.map((item) => {
          return (
            <div
              className="flex gap-2 border-b-[1px] border-bordercolor p-4 py-2 "
              key={item.id}>
              {/* user Img */}
              {isVisible === item.id && (
                <DeletePost visibility={setIsVisible} id={item.id} />
              )}
              <div className="h-[40px] w-[40px] bg-blue-700 rounded-full px-3.5 pb-3 pt-1">
                <p className="text-white text-[20px]">
                  {item.userName.charAt(0)}
                </p>
              </div>
              <div className=" w-full flex flex-col gap-1 ">
                <div className="flex flex-col ">
                  <div className="w-full flex justify-between text-[16px]">
                    <div className="flex gap-1">
                      <p className="text-white font-medium ">{item.userName}</p>
                      <p className="text-textgray2">@{item?.userEmail}</p>
                    </div>
                    <div className="relative">
                      <div
                        className=" flex  gap-2 items-center p-2 rounded-[10px] cursor-pointer  h-7 hover:bg-[#f4212f27]"
                        onClick={() => setIsVisible(item.id)}>
                        <DeleteIcon />
                        <p className="text-[#f4212e] text-[14px] font-medium">
                          Delete
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-[#f8f4f4] font-light">{item.userPost}</p>
                  </div>
                </div>
                {item.imgUrl !== '' && (
                  <Image
                    src={item.imgUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full object-cover mt-1.5 border-[1px] border-bordercolor rounded-[20px]"
                  />
                )}
                <PostInteractions id={item.id} like={item.likes} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostList;
