import type { Responsible } from "@/04-features/upload/model/types";
import * as XLSX from "xlsx";

export const responsiblesToSheet = (data: Responsible[]) => {
  return XLSX.utils.json_to_sheet(
    data.map((r) => ({
      Name: r.name,
      Assigned: r.assigned,
      Completed: r.completed,
      Percent: Math.round(r.percent * 100) + "%",
    })),
  );
};
