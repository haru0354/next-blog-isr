import type { Metadata } from "next";
import ListCategory from "@/app/components/blog/dashboard/list/ListCategory";

export const metadata: Metadata = {
  title: "カテゴリの一覧",
};

const page = () => {
  return (
    <>
      <ListCategory />
    </>
  );
};

export default page;
