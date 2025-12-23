export const parseMDY = (dateStr: string): Date | null => {
  if (!dateStr) return null;

  const parts = dateStr.split('/');
  if (parts.length !== 3) return null;

  const [m, d, y] = parts.map(Number);
  if (!Number.isInteger(m) || !Number.isInteger(d) || !Number.isInteger(y)) {
    return null;
  }

  const fullYear = y < 100 ? 2000 + y : y;

  const date = new Date(fullYear, m - 1, d);

  // 🔥 КЛЮЧЕВАЯ ПРОВЕРКА
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
};
