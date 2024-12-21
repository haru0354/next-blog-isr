import SideImage from "./parts/SideImage";
import SideCategoryMenu from "./parts/SideCategoryMenu";
import SideNewArticles from "./parts/SideNewArticles";

const SideMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded py-2">
      <SideImage
        src="/no_image.jpg"
        alt="画像がありません"
        href="/"
        textTitle=""
      />
      <SideCategoryMenu />
      <SideNewArticles />
      <SideImage
        src="/no_image.jpg"
        alt="画像がありません"
        href="/"
        textTitle="テキスト有サイド画像リンク"
      />
    </div>
  );
};

export default SideMenu;
