import type { Responsible } from "@/04-features";
import { StatTable } from "./StatTable";

type Props = {
  title: string;
  data: Responsible[];
};

export function InstanceSection({ title, data }: Props) {
  if (!data?.length) return null;

  return (
    <section className="mb-5">
      <h3>{title}</h3>
      <StatTable data={data} />
    </section>
  );
}
