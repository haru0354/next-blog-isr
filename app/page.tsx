import Header from "./components/Header";
import TopCategories from "./components/top-page/TopCategories";
import TopNewArticles from "./components/section/TopNewArticles";
import Footer from "./components/Footer";
import HeaderImage from "./components/section/HeaderImage";
import RecommendArticle from "./components/section/RecommendArticle";
import ThreeColumnIcon from "./components/section/ThreeColumnIcon";

export default function Home() {
  return (
    <>
      <Header isTopPage={true} />
      {process.env.NEXT_PUBLIC_HEADER_IMAGE === "true" && <HeaderImage />}
      <main>
        <div className="w-full">
          <RecommendArticle
            src="/no_image.jpg"
            alt="aa"
            url="/"
            name="aa"
            contents={["bb", "cc", "dd"]}
          />
          <TopNewArticles />
          <TopCategories />
          <ThreeColumnIcon
            title="このブログで分かること"
            name1="●●の基礎知識"
            name2="●●の悩みの解決"
            name3="●●な疑問"
            content1="テスト"
            content2="テスト2"
            content3="テスト3"
          />
          <RecommendArticle
            src="/no_image.jpg"
            alt="aa"
            url="/"
            name="aa"
            contents={["bb", "cc", "dd"]}
            imageRight={false}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
