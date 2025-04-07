import CommentIcon from "@/app/commons/icons/postIcons/CommentIcon";
import LoveIcon from "@/app/commons/icons/postIcons/LoveIcon";
import RepostIcon from "@/app/commons/icons/postIcons/RepostIcon";
import ViewIcon from "@/app/commons/icons/postIcons/ViewIcon";
import { doc } from "firebase/firestore";
import { db } from "@/app/commons/firebase/firebase";
import { LikeBtn } from "@/app/commons/types/types";

function PostInteractions({ like, id }: LikeBtn) {
  return (
    <>
      <div className="w-full flex justify-between">
        <CommentIcon />
        <RepostIcon />
        <button className="flex items-center">
          <LoveIcon />
          <p
            className={`${
              like > 1 ? "hidden" : "block"
            } text-white -ml-1 text-[14px]`}>
            {like}
          </p>
        </button>
        <ViewIcon />
      </div>
    </>
  );
}

export default PostInteractions;
