import { getCategory, getPost } from "@/app/lib/service/blogServiceUnique";
import { getPosts } from "@/app/lib/service/blogServiceMany";
import LeftColumn from "@/app/components/blog/contents-area/LeftColumn";
import SideMenu from "@/app/components/blog/side-menu/SideMenu";
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
      <LeftColumn
        categoryPage={false}
        post={post}
        formattedCreatedDate={formattedCreatedDate}
        filteredCategoryInArticles={filteredCategoryInArticles}
      />
      <div className="w-full md:w-1/4 py-4 bg-white rounded">
        <SideMenu />
      </div>
    </>
  );
};

export default Page;
