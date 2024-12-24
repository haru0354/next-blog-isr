import Header from "./components/Header";
import TopCategories from "./components/top-page/TopCategories";
import TopNewArticles from "./components/top-page/TopNewArticles";
import Footer from "./components/Footer";
import HeaderImage from "./components/top-page/HeaderImage";
import RecommendArticle from "./components/section/RecommendArticle";

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
        </div>
      </main>
      <Footer />
    </>
  );
}
