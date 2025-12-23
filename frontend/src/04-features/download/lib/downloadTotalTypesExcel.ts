import * as XLSX from "xlsx";
import { buildSheetData } from "./buildSheetData";
import type { DateRange } from "@/05-entities";
import { store } from "@/01-app";

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

  const state = store.getState();
  const dateArr = state.upload.dateRange;
  const dateRange: DateRange = {
    startDate: dateArr ? dateArr[0] : null,
    endDate: dateArr ? dateArr[1] : null,
  };

  const start = dateRange?.startDate ? dateRange.startDate.toLocaleDateString("ru-RU") : "";
  const end = dateRange?.endDate ? dateRange.endDate.toLocaleDateString("ru-RU") : "";

  for (const sheet of sheets) {
    const data = buildSheetData(totalTypes, sheet.field);

    // создаем пустой лист
    const worksheet = XLSX.utils.aoa_to_sheet([]);

    // добавляем три первые строки
    const headerRows = [
      ["Отчет по фамилиям"], // первая строка
      [`Период ${start} - ${end}`], // вторая строка
      [], // третья пустая
    ];
    // добавляем заголовки в первые три строки
    XLSX.utils.sheet_add_aoa(worksheet, headerRows, { origin: 0 });

    // делаем первые две строки жирными
    for (let R = 0; R <= 1; ++R) {
      // строки 0 и 1
      const C = 0; // первая колонка
      const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
      if (!worksheet[cellAddress]) continue;
      worksheet[cellAddress].s = {
        font: { bold: true },
      };
    }

    // добавляем данные начиная с 4-й строки
    XLSX.utils.sheet_add_json(worksheet, data, { origin: 3, skipHeader: false });

    // добавляем лист в книгу
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
