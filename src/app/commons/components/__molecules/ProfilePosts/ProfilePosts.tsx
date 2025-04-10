"use client";
import { useState, useEffect } from "react";
import { ForYouList } from "@/app/commons/types/types";
import { db } from "@/app/commons/firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DotIcon from "@/app/commons/icons/AddPostIcons/DotIcon";
import DeletePost from "../../__atoms/DeletePost/DeletePost";
import Image from "next/image";
import PostInteractions from "../postInteractions/PostInteractions";

function ProfilePosts() {
  const [isVisible, setIsVisible] = useState("");
  const [list, setList] = useState<ForYouList[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const UserId = getAuth();

  useEffect(() => {
    onAuthStateChanged(UserId, (user) => {
      if (user) {
        setUserId(user?.uid);
      }
    });
  });

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

  const filteredPost = list.filter((item) => {
    return item.userId === userId;
  });
  console.log(filteredPost);

  return (
    <>
      <div className="w-full ">
        {filteredPost.map((item) => {
          return (
            <div
              className="flex gap-2 border-b-[1px] border-bordercolor p-4 py-2 "
              key={item.id}>
              {/* user Img */}

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
                        className=" rounded-full cursor-pointer "
                        onClick={() => setIsVisible(item.id)}>
                        <DotIcon />
                        {isVisible === item.id && (
                          <DeletePost visibility={setIsVisible} id={item.id} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-[#f8f4f4] font-light">{item.userPost}</p>
                  </div>
                </div>
                {item.imgUrl !== "" && (
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
export default ProfilePosts;
