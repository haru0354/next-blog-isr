import Header from "./components/Header";
import Section from "./components/1ColumnPage/Section";
import CategoryTop from "./components/1ColumnPage/CategoryTop";
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
          <Section bgColor="bg-white" name="カテゴリ">
            <CategoryTop />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
