import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AddPostForm from "../../__atoms/AddPostForm/AddPostForm";
function AddPost() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="w-full p-4 flex gap-3 border-b-[2px] border-r-[1px] border-bordercolor">
        <div className="">
          <button className="w-[40px] h-[40px] bg-blue-800 rounded-full pb-1">
            <p className="text-white font-medium text-[18px] ">
              {user?.displayName?.charAt(0)}
            </p>
          </button>
        </div>
        <AddPostForm />
      </div>
    </>
  );
}

export default AddPost;
