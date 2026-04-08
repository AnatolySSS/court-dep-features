import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Responsible } from "@/04-features";

type Props = {
  data: Responsible[];
};

export function InWorkTable({ data }: Props) {
  return (
    <DataTable value={data} sortField="inWork" sortOrder={-1} removableSort scrollable scrollHeight="51vh">
      <Column field="name" header="ФИО" sortable />
      <Column field="inWork" header="В работе" sortable />
    </DataTable>
  );
}
