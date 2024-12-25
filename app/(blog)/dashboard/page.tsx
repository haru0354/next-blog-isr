import { addDashboardMemo } from "@/app/action/actionDashboard";
import FormDashboardMemo from "@/app/components/blog/dashboard/form/FormDashboardMemo";
import ListDashboardMemo from "@/app/components/blog/dashboard/list/ListDashboardMemo";

const Memo = async () => {
  return (
    <>
      <ListDashboardMemo />
      <FormDashboardMemo formAction={addDashboardMemo} buttonName="追加" />
    </>
  );
};

export default Memo;
