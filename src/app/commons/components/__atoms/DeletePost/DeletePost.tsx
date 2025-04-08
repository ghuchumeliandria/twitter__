import { db } from "@/app/commons/firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
type id = {
  id: string;
  visibility: (value: string) => void;
};
export default function DeletePost({ id, visibility }: id) {
  const handleDelete = async () => {
    const itemRef = doc(db, "post", id);
    try {
      await deleteDoc(itemRef);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-[-200px] right-[-130px] bottom-0 bg-[#5b708366]"></div>
      <div className="w-[320px] flex flex-col gap-5 justify-center items-center  absolute p-8 translate-x-1/2  transform  rounded-[20px] bg-black">
        <div className="w-full">
          <h1 className="font-semibold text-left text-white text-[22px] mb-2">
            Delete Post?
          </h1>
          <p className="text-bordercolor text-[15px] ">
            This can’t be undone and it will be removed from your profile, the
            timeline of any accounts that follow you, and from search results.{" "}
          </p>
        </div>
        <div className="w-full">
          <button
            className="w-full bg-red-500 py-2.5 mb-3 rounded-full cursor-pointer text-white font-semibold hover:bg-red-600"
            onClick={handleDelete}>
            Delete
          </button>
          <button
            onClick={() => visibility("")}
            className="text-white w-full py-2.5 cursor-pointer border-[1px] border-[#5f5c5c] font-semibold rounded-full ">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
