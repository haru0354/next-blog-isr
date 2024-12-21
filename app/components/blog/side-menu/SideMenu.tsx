import SideTopImage from "./parts/SideTopImage";
import SideCategoryMenu from "./parts/SideCategoryMenu";
import SideNewArticles from "./parts/SideNewArticles";

const SideMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded py-2">
      <SideTopImage />
      <SideCategoryMenu />
      <SideNewArticles />
    </div>
  );
};

export default SideMenu;
