import Header from "./components/Header";
import Section from "./components/1ColumnPage/Section";
import CategoryTop from "./components/1ColumnPage/CategoryTop";
import NewArticleTop from "./components/1ColumnPage/NewArticleTop";
import Footer from "./components/Footer";
import HeaderImage from "./components/1ColumnPage/HeaderImage";

export default function Home() {
  return (
    <>
      <Header isTopPage={true} />
      <HeaderImage />
      <main>
        <div className="w-full">
          <Section bgColor="bg-sky-50" name="新着記事">
            <NewArticleTop />
          </Section>
          <Section bgColor="bg-white" name="カテゴリ">
            <CategoryTop />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
