import Header from "./components/layout/blog/Header";
import CategoryList from "./components/section/CategoryList";
import NewArticleList from "./components/section/NewArticleList";
import HeaderImage from "./components/layout/blog/HeaderImage";
import RecommendArticle from "./components/section/RecommendArticle";
import ThreeColumnIcon from "./components/section/ThreeColumnIcon";
import Footer from "./components/layout/blog/Footer";

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
            name="任意の記事へのリンク"
            contents={[
              "これはtest記事です。",
              "任意の紹介文の記載をすることができます。",
              "この記事については下記で詳しく解説しています。",
            ]}
          />
          <NewArticleList />
          <CategoryList />
          <ThreeColumnIcon
            title="このブログで分かること"
            name1="●●の基礎知識"
            name2="●●の悩みの解決"
            name3="●●な疑問"
            content1="ここでは任意の項目を表示できるエリアです。"
            content2="TOPページで使用するのを想定しています。"
            content3="単なるカテゴリと記事表示だけではない、TOPページの作成ができます。"
          />
          <RecommendArticle
            src="/no_image.jpg"
            alt="aa"
            url="/"
            name="任意の記事へのリンク"
            contents={[
              "これはtest記事です。",
              "任意の紹介文の記載をすることができます。",
              "この記事については下記で詳しく解説しています。",
            ]}
            imageRight={false}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
