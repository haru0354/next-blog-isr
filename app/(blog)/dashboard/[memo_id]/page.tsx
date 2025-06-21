import { Metadata } from "next";

import {
  deleteDashboardMemo,
  updateDashboardMemo,
} from "@/app/action/actionDashboard";
import { getDashboardMemo } from "@/app/lib/service/blogServiceUnique";
import FormDashboardMemo from "@/app/components/blog/dashboard/form/FormDashboardMemo";
import DeleteModal from "@/app/components/ui/DeleteModal";
import NextLinkButton from "@/app/components/ui/button/NextLinkButton";

export const metadata: Metadata = {
  title: "個別のメモ",
};

const Page = async ({ params }: { params: { memo_id: string } }) => {
  const id = Number(params.memo_id);
  const updateDashboardMemoWidthId = updateDashboardMemo.bind(null, id);
  const dashboardMemo = await getDashboardMemo(params.memo_id);

  return (
    <>
      <FormDashboardMemo
        formAction={updateDashboardMemoWidthId}
        dashboardMemo={dashboardMemo}
        buttonName={"保存"}
      />
      <div className="flex justify-center items-center">
        <NextLinkButton
          href="/dashboard"
          color="gray"
          size="normal"
          className="rounded mb-1"
        >
          キャンセル
        </NextLinkButton>
      </div>
      <DeleteModal
        DeleteName="メモ"
        name={dashboardMemo?.name}
        formAction={deleteDashboardMemo}
        id={dashboardMemo?.id}
      />
    </>
  );
};

export default Page;
