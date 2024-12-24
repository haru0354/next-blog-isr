import Header from "./components/Header";
import TopCategories from "./components/top-page/TopCategories";
import TopNewArticles from "./components/top-page/TopNewArticles";
import Footer from "./components/Footer";
import HeaderImage from "./components/top-page/HeaderImage";

export default function Home() {
  return (
    <>
      <Header isTopPage={true} />
      {process.env.NEXT_PUBLIC_HEADER_IMAGE === "true" && <HeaderImage />}
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
