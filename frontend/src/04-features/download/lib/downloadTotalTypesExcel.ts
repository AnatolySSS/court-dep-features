import * as XLSX from "xlsx";
import { buildSheetData } from "./buildSheetData";

export function downloadTotalTypesExcel(totalTypes: any) {
  const workbook = XLSX.utils.book_new();

  const sheets = [
    {
      name: "Типизация исков",
      field: "typeResponsibles",
    },
    {
      name: "Подготовка возражений",
      field: "objectionResponsibles",
    },
    {
      name: "Всего",
      field: "allTypeResponsibles",
    },
  ] as const;

  for (const sheet of sheets) {
    const data = buildSheetData(totalTypes, sheet.field);
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name);
  }

  XLSX.writeFile(
    workbook,
    `Отчет ${new Date().toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}.xlsx`
  );
}
