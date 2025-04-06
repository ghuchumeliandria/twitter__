import CommentIcon from "@/app/commons/icons/postIcons/CommentIcon";
import LoveIcon from "@/app/commons/icons/postIcons/LoveIcon";
import RepostIcon from "@/app/commons/icons/postIcons/RepostIcon";
import ViewIcon from "@/app/commons/icons/postIcons/ViewIcon";

function PostInteractions(){
    return(
        <>
        
        <div className="w-full flex justify-between">
            <CommentIcon />
            <RepostIcon />
            <LoveIcon />
            <ViewIcon />
        </div>
        </>
    )
}

export default PostInteractions;