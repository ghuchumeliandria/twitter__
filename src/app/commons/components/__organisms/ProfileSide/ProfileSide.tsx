import BackHome from "../../__atoms/BackToHomePage/BackHome";
import ProfileDescription from "../../__molecules/ProfileDescription/ProfileDescription";
import ProfileOptions from "../../__molecules/ProfileOptions/ProfileOptions";
import ProfilePictures from "../../__molecules/ProfilePictures/ProfilePictures";
import ProfilePosts from "../../__molecules/ProfilePosts/ProfilePosts";

function ProfileSide() {
  return (
    <>
      <div className="w-full max-w-[600px]">
        <BackHome />
        <ProfilePictures />
        <ProfileDescription />
        <ProfileOptions />
        <ProfilePosts />
      </div>
    </>
  );
}

export default ProfileSide;
