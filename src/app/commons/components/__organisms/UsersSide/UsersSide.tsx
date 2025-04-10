import PremiumBar from "../../__molecules/PremiumBar/PremiumBar";
import SearchBar from "../../__molecules/SearchBar/SearchBar";
import WhatsHappening from "../../__molecules/WhatsHappening/WhatsHappening";
function UserSide() {
  return (
    <>
      <div className="h-full w-full max-w-[350px] pl-8 border-l-[1px] border-bordercolor">
        <SearchBar />
        <PremiumBar />
        <WhatsHappening />
      </div>
    </>
  );
}

export default UserSide;
