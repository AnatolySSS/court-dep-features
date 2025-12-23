import * as XLSX from "xlsx";

type Responsible = {
  name: string;
  assigned: number;
  completed: number;
  percent: number;
};

export const responsiblesToSheet = (data: Responsible[]) => {
  return XLSX.utils.json_to_sheet(
    data.map((r) => ({
      Name: r.name,
      Assigned: r.assigned,
      Completed: r.completed,
      Percent: Math.round(r.percent * 100) + "%",
    }))
  );
};
