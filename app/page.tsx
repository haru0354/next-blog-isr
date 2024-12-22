import Header from "./components/Header";
import TopCategories from "./components/top-page/TopCategories";
import TopNewArticles from "./components/top-page/TopNewArticles";
import Footer from "./components/Footer";
import HeaderImage from "./components/1ColumnPage/HeaderImage";

export default function Home() {
  return (
    <>
      <Header isTopPage={true} />
      <HeaderImage />
      <main>
        <div className="w-full">
          <TopNewArticles />
          <TopCategories />
        </div>
      </main>
      <Footer />
    </>
  );
}
