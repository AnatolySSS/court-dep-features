import * as XLSX from "xlsx";
import { responsiblesToSheet } from "./responsiblesToSheet";

export function downloadTotalTypesExcel(totalTypes: any) {
  const workbook = XLSX.utils.book_new();

  // ===== allInstances =====
  if (totalTypes.allInstances) {
    XLSX.utils.book_append_sheet(
      workbook,
      responsiblesToSheet(totalTypes.allInstances.typeResponsibles),
      "All Instances - Type"
    );

    XLSX.utils.book_append_sheet(
      workbook,
      responsiblesToSheet(totalTypes.allInstances.objectionResponsibles),
      "All Instances - Objection"
    );

    XLSX.utils.book_append_sheet(
      workbook,
      responsiblesToSheet(totalTypes.allInstances.allTypeResponsibles),
      "All Instances - All"
    );
  }

  // ===== по каждой инстанции =====
  for (const key in totalTypes) {
    if (key === "allInstances") continue;

    const instance = totalTypes[key];

    if (!instance?.allTypeResponsibles) continue;

    XLSX.utils.book_append_sheet(
      workbook,
      responsiblesToSheet(instance.allTypeResponsibles),
      key.slice(0, 31) // Excel ограничение на имя листа
    );
  }

  XLSX.writeFile(workbook, "totalTypes.xlsx");
}
