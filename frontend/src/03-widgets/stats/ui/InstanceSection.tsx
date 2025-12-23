import { ResponsibleTable } from "@/05-entities";
import type { Responsible } from "@/05-entities";

type Props = {
  title: string;
  data: Responsible[];
};

export function InstanceSection({ title, data }: Props) {
  if (!data?.length) return null;

  return (
    <section className="mb-5">
      <h3>{title}</h3>
      <ResponsibleTable data={data} />
    </section>
  );
}
