import Header from "./components/Header";
import TopCategories from "./components/top-page/TopCategories";
import TopNewArticles from "./components/top-page/TopNewArticles";
import Footer from "./components/Footer";
import HeaderImage from "./components/top-page/HeaderImage";
import RecommendArticle from "./components/section/RecommendArticle";
import Hero from "./components/1ColumnPage/Hero";

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
          <RecommendArticle
            src="/no_image.jpg"
            alt="aa"
            url="/"
            name="aa"
            contents={["bb", "cc", "dd"]}
            imageRight={false}
          />
           <Hero
            title={"aa"}
            subTitle={"gg"}
            contents={[
              "国内旅行・海外旅行で使える",
              "PC・スマホ・タブレット対応の無料アプリ",
            ]}
            href="/"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
