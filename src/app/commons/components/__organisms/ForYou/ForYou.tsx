import AddPost from "../../__molecules/AddPost/AddPost";
import ForYouHeader from "../../__molecules/ForYouHeader/ForYouHeader";
import PostList from "../../__molecules/PostList/PostList";

function ForYou() {
  return (
    <>
      <div className="w-full max-w-[600px] ">
        <div className="w-full flex flex-col">
          <ForYouHeader />
          <AddPost />
          <PostList />
        </div>
      </div>
    </>
  );
}

export default ForYou;
