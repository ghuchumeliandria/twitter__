import DotIcon from "@/app/commons/icons/AddPostIcons/DotIcon";

function WhatsHappening() {
  const Trending = [
    {
      title: "Sports Trending",
      trend: "Khvicha Kvaratskhelia",
      postsCount: "21.6K. posts",
    },
    {
      title: "Trending in Georgia",
      trend: "Rustaveli",
      postsCount: "25.3K. posts",
    },
    {
      title: "Trending in Georgia",
      trend: "Salome Zourabichvili",
      postsCount: "18.2K. posts",
    },
    {
      title: "Trending in Georgia",
      trend: "RE:INVENT",
      postsCount: "22.8K. posts",
    },
  ];
  return (
    <>
      <div className="w-full border-[1px] border-bordercolor rounded-[15px] mt-4 ">
        {Trending.map((item, index) => {
          return (
            <div
              className="p-3 w-full flex justify-between items-center hover:bg-[#5b70831d] first:rounded-tl-[15px] first:rounded-tr-[15px] last:rounded-bl-[15px] last:rounded-br-[15px] cursor-pointer "
              key={index}>
              <div className="w-full">
                <p className="text-textgray text-[13px] ">{item.title}</p>
                <h2 className="text-white font-semibold text-[15px]">
                  {item.trend}
                </h2>
                <p className="text-textgray text-[13px] ">{item.postsCount}</p>
              </div>
              <DotIcon />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default WhatsHappening;
