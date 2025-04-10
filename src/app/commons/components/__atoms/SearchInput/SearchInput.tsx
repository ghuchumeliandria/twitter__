import SearchIcon from "@/app/commons/icons/sideBarIcons/SearchIcon";

export default function SearchInput() {
  return (
    <>
      <div className="w-full flex items-center mt-1 gap-1 bg-transparent border-[1px] border-bordercolor rounded-full px-4 py-2 focus-within:border-[2px] focus-within:border-[#f91880]">
        <SearchIcon className="w-4 " color="#71767b" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full outline-none caret-[#f91880]  text-white text-[14px] mb-[1px] placeholder:text-[#71767b]"
        />
      </div>
    </>
  );
}
