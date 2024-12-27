import Link from "next/link";
import { getCategories } from "@/app/lib/service/blogServiceMany";

const page = async () => {
  const siteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE;
  const categories = await getCategories("posts");

  if (!categories) {
    return null;
  }

  return (
    <>
      <h2>サイトマップ</h2>
      <div className="p-4 mb-6 border border-dashed border-gray-400">
        <p className="font-semibold text-[#2a7bdf]">
          <Link href="/">{siteTitle}</Link>
        </p>
        {categories.map((category) => {
          const sortedDraftTruePosts = category.posts
            .filter((post) => post.draft === true)
            .sort((a, b) => b.id - a.id);
          return (
            <div className="px-8" key={category.id}>
              <ul className="text-[#2a7bdf]">
                <li className="my-4 font-semibold">
                  <Link href={`/${category.slug}`}>{category.name}</Link>
                </li>
                {sortedDraftTruePosts.map((post) => {
                  return (
                    <li
                      key={post.id}
                      className="my-4 ml-4 list-disc list-inside"
                    >
                      <Link href={`/${category.slug}/${post.slug}`}>
                        {post.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
