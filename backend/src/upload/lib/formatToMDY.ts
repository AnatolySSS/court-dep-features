import * as XLSX from 'xlsx';

export function formatToMDYIfDate(value: any): any {
  let date: Date | null = null;

  // 1. Excel число (дата)
  if (typeof value === 'number') {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      date = new Date(parsed.y, parsed.m - 1, parsed.d);
    }
  }

  // 2. Строка — пробуем распарсить
  if (typeof value === 'string') {
    let match;

    // DD.MM.YYYY или DD/MM/YYYY
    match = value.match(/^(\d{2})[./](\d{2})[./](\d{4})$/);
    if (match) {
      const [, dd, mm, yyyy] = match;
      date = new Date(+yyyy, +mm - 1, +dd);
    }

    // YYYY-MM-DD
    if (!date) {
      match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (match) {
        const [, yyyy, mm, dd] = match;
        date = new Date(+yyyy, +mm - 1, +dd);
      }
    }
  }

  // ❗ если это НЕ дата — возвращаем как есть
  if (!date || isNaN(date.getTime())) {
    return value;
  }

  // 👉 формат MM/DD/YY
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const y = date.getFullYear() % 100;

  return `${m}/${d}/${y}`;
}
