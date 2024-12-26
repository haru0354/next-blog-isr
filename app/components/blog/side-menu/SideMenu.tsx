import SideImage from "./parts/SideImage";
import SideCategoryMenu from "./parts/SideCategoryMenu";
import SideNewArticles from "./parts/SideNewArticles";

const SideMenu = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-1/4 py-8 bg-white rounded">
      <SideImage src="/no_image.jpg" alt="画像がありません" href="/" />
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
