import { ResponsibleTable } from "@/entities/responsible/ui/ResponsibleTable";
import type { Responsible } from "@/entities/responsible/model/types";

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
