import { getCategory, getPost } from "@/app/lib/service/blogServiceUnique";
import { getPosts } from "@/app/lib/service/blogServiceMany";
import ArticleContentArea from "@/app/components/blog/contents-area/ArticleContentArea";
import ArticleTop from "@/app/components/blog/contents-area/ArticleTop";
import Breadcrumbs from "@/app/components/blog/contents-area/Breadcrumbs";
import SideMenu from "@/app/components/blog/side-menu/SideMenu";
import RelatedArticles from "@/app/components/blog/contents-area/RelatedArticles";
import NotFound from "@/app/not-found";

export async function generateStaticParams() {
  const posts = await getPosts("categoryAndPostImage");

  return posts.map((post) => ({
    params: {
      post_slug: post.slug,
    },
    revalidate: 60 * 60 * 24 * 15,
  }));
}

const Page = async ({
  params,
}: {
  params: { post_slug: string; category_slug: string };
}) => {
  const post = await getPost("slug", params.post_slug, "categoryAndPostImage");

  if (!post || post.draft === false) {
    return (
      <div>
        <NotFound />
        <p>記事が存在しないか削除された可能性があります。</p>
      </div>
    );
  }

  const formattedCreatedDate = new Date(post.createdDate).toLocaleDateString();

  const category = await getCategory(
    "slug",
    params.category_slug,
    "postsAndPostImage"
  );

  if (
    !category ||
    (!category.title && category.posts.every((post) => !post.draft))
  ) {
    return (
      <div>
        <NotFound />
        <p>カテゴリが存在しないか削除された可能性があります。</p>
      </div>
    );
  }
  const filteredCategoryInArticles = category.posts.filter(
    (post) => post.slug !== params.post_slug
  );

  return (
    <>
      <div className="blog w-full md:w-3/4 bg-white rounded-sm py-8 px-4 md:px-12 mr-8 ">
        <Breadcrumbs
          categoryName={post?.category.name}
          categorySlug={post?.category.slug}
        />
        <h1>{post.title}</h1>
        <ArticleTop src={post.postImage?.url} alt={post.postImage?.altText} />
        <p className="text-gray-500 mb-5">
          記事の投稿日：{formattedCreatedDate}
        </p>
        <ArticleContentArea content={post.content} />
        <RelatedArticles
          articles={filteredCategoryInArticles}
          categorySlug={category.slug}
        />
      </div>
      <div className="w-full md:w-1/4 py-4 bg-white rounded">
        <SideMenu />
      </div>
    </>
  );
};

export default Page;
