import { type Responsible } from "@/04-features";
import { PercentageTable } from "./PercentageTable";
import { useLocation } from "react-router-dom";
import { DoneByPeriodTable } from "./DoneByPeriodTable";
import { InWorkTable } from "./InWorkTable";

type Props = {
  title: string;
  data: Responsible[];
};

export function InstanceSection({ title, data }: Props) {
  if (!data?.length) return null;

  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  return (
    <section className="mb-5">
      <h3>{title}</h3>
      {currentPage === "percentage" && <PercentageTable data={data} />}
      {currentPage === "doneByPeriod" && <DoneByPeriodTable data={data} />}
      {currentPage === "inWork" && <InWorkTable data={data} />}
    </section>
  );
}
