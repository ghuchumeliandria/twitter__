import { auth } from "@/app/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AddPostForm from "../../__atoms/AddPostForm/AddPostForm";
{
  /* <form onSubmit={handleSubmit}>
            <textarea
              name=""
              value={value}
              onChange={(e) => setvalue(e.target.value)}
              id=""></textarea>
              <button type="submit" className="text-white">Submit</button>
              {item.map((item) => {
                return <div className="" key={item.id}>
                  <h1 className="text-red-700">{item.userName}</h1>
                  <h1 className="text-white">{item.userPost}</h1>
                </div>
              })}
          </form> */
}
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
