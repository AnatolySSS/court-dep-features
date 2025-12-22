import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Responsible } from "@/05-entities";
import { ProgressCell } from "@/06-shared";

type Props = {
  data: Responsible[];
};

export function ResponsibleTable({ data }: Props) {
  return (
    <DataTable value={data} sortField="assigned" sortOrder={-1} removableSort scrollable scrollHeight="58vh">
      <Column field="name" header="ФИО" sortable />
      <Column field="assigned" header="Назначено" sortable />
      <Column field="completed" header="Выполнено" sortable />
      <Column
        field="percent"
        header="%"
        sortable
        body={({ assigned, completed }: Responsible) =>
          assigned ? Math.round((completed / assigned) * 100) + "%" : "-"
        }
      />
      <Column
        header="Прогресс"
        body={({ assigned, completed }: Responsible) => <ProgressCell assigned={assigned} completed={completed} />}
      />
    </DataTable>
  );
}
