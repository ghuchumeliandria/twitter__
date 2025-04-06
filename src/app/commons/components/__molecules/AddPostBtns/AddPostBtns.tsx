
type value = {
    value : string
}

function AddPostBtns({value} : value) {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-white">esari sityva ra iconebis</h1>
        <div className="">
          <button disabled={!value} className="bg-white text-black w-[66px] h-9 rounded-full">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPostBtns;
