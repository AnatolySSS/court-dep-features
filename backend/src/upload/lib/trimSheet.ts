import * as XLSX from 'xlsx';

export function trimSheet(sheet: XLSX.WorkSheet) {
  const range = XLSX.utils.decode_range(sheet['!ref']!);

  // Найти последнюю заполненную строку по колонке A
  let lastRow = 0;
  for (let R = range.e.r; R >= range.s.r; R--) {
    const cell = sheet[XLSX.utils.encode_cell({ r: R, c: 0 })]; // колонка A
    if (cell && cell.v != null && cell.v !== '') {
      lastRow = R;
      break;
    }
  }

  // Найти последний заполненный столбец в строке 2 (R = 1)
  let lastCol = 0;
  for (let C = range.e.c; C >= range.s.c; C--) {
    const cell = sheet[XLSX.utils.encode_cell({ r: 1, c: C })]; // строка 2
    if (cell && cell.v != null && cell.v !== '') {
      lastCol = C;
      break;
    }
  }

  // Обновляем диапазон листа
  sheet['!ref'] = XLSX.utils.encode_range({
    s: { r: range.s.r, c: range.s.c },
    e: { r: lastRow, c: lastCol },
  });
}
