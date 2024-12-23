import { revalidatePath } from "next/cache";
import { getPosts } from "./service/blogServiceMany";

export async function revalidatePostsAndCategories() {
  try {
    const posts = await getPosts("category");
    const filteredPosts = posts.filter((post) => post.draft);

    const uniqueCategorySlug = [
      ...new Set(filteredPosts.map((post) => post.category.slug)),
    ];

    const post_slug = filteredPosts.map((post) => post.slug);

    uniqueCategorySlug.map((category) => {
      revalidatePath(`/${category}`);
    });

    filteredPosts.map((post, index) => {
      revalidatePath(`/${post.category.slug}/${post_slug[index]}`);
    });
  } catch (error) {
    console.error("再検証中にエラーが発生しました:", error);
    throw new Error("再検証に失敗しました");
  }
}
