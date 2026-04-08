import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Responsible } from "@/04-features";

type Props = {
  data: Responsible[];
};

export function DoneByPeriodTable({ data }: Props) {
  return (
    <DataTable value={data} sortField="completed" sortOrder={-1} removableSort scrollable scrollHeight="51vh">
      <Column field="name" header="ФИО" sortable />
      <Column field="completed" header="Выполнено" sortable />
    </DataTable>
  );
}
