import { db } from "@/app/commons/firebase/firebase";
import DeleteIcon from "@/app/commons/icons/DeleteIcon/DeleteIcon";
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
      <button
        className="w-full flex gap-5 absolute top-1 -left-7 "
        onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </>
  );
}
