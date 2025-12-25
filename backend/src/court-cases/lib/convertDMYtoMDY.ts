// Функция для конвертации даты из формата DMY (DD.MM.YYYY) в формат MDY (MM/DD/YYYY)
export const convertDMYtoMDY = (dateStr: string): string | null => {
  if (!dateStr) return null;

  const parts = dateStr.split('.');
  if (parts.length !== 3) return null;

  const [d, m, y] = parts.map(Number);

  if (!Number.isInteger(d) || !Number.isInteger(m) || !Number.isInteger(y)) {
    return null;
  }

  // базовая валидация
  if (d < 1 || d > 31 || m < 1 || m > 12) {
    return null;
  }

  return `${m}/${d}/${y}`;
};
