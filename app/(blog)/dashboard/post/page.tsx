import ListDraftTruePosts from "@/app/components/blog/dashboard/list/ListDraftTruePosts";
import { getPosts } from "@/app/lib/service/blogServiceMany";

const page = async () => {
  const posts = await getPosts("category");

  const sortedDraftTruePosts = posts
    .filter((post) => post.draft === true)
    .sort((a, b) => b.id - a.id);

  return (
    <>
      <ListDraftTruePosts draftTruePosts={sortedDraftTruePosts} />
    </>
  );
};

export default page;
