import * as XLSX from "xlsx";
import { formatExcelDate } from "./formatExcelDate";

export async function parseExcel(file: Blob): Promise<any[]> {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });

  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const rows = XLSX.utils.sheet_to_json<any[]>(sheet, {
    header: 1,
    raw: false,
    defval: null,
  });

  const groupHeaders = rows[0];
  const keys = rows[1];
  const dataRows = rows.slice(2);

  return dataRows.map((row) => {
    const obj: Record<string, any> = {};
    let currentGroup = "";

    row.forEach((cell, i) => {
      const group = groupHeaders[i] ?? currentGroup;
      currentGroup = group;

      obj[group] ??= {};

      obj[group][keys[i]] =
        typeof cell === "string" && /\d{1,2}\/\d{1,2}\/\d{2}/.test(cell) ? formatExcelDate(cell) : cell;
    });

    return obj;
  });
}
