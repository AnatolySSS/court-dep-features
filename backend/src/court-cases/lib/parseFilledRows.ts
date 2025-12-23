import * as XLSX from 'xlsx';

// Экспериментальная функция для парсинга заполненных строк из листа Excel
export const parseFilledRows = (sheet: XLSX.WorkSheet): any[][] => {
  // Получаем диапазон заполненных ячеек
  const range = XLSX.utils.decode_range(sheet['!ref'] || '');
  const rows: any[][] = [];

  for (let R = range.s.r; R <= range.e.r; ++R) {
    const row: any[] = [];
    let hasValue = false;

    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = { r: R, c: C };
      const cellRef = XLSX.utils.encode_cell(cellAddress);
      const cell = sheet[cellRef];

      if (cell) {
        row.push(cell.v);
        hasValue = true;
      } else {
        row.push(null);
      }
    }

    if (hasValue) {
      rows.push(row);
    }
  }

  return rows;
};
