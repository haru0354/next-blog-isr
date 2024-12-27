import { getPosts } from "@/app/lib/service/blogServiceMany";
import ListDraftFalsePosts from "@/app/components/blog/dashboard/list/ListDraftFalsePosts";

const page = async () => {
  const posts = await getPosts("category");

  const sortedDraftFalsePosts = posts
    .filter((post) => post.draft === false)
    .sort((a, b) => b.id - a.id);
  return (
    <>
      <ListDraftFalsePosts draftFalsePosts={sortedDraftFalsePosts} />
    </>
  );
};

export default page;
