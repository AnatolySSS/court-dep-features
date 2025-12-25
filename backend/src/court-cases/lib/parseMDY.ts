import { convertDMYtoMDY } from './convertDMYtoMDY';

export const parseMDY = (dateStr: string): Date | null => {
  if (!dateStr) return null;

  if (dateStr.includes('.')) {
    // Если формат DMY(с точками), конвертируем его в MDY(со слешами)
    const converted = convertDMYtoMDY(dateStr);
    if (!converted) return null;
    dateStr = converted;
  }

  const parts = dateStr.split('/');
  if (parts.length !== 3) return null;

  const [m, d, y] = parts.map(Number);
  if (!Number.isInteger(m) || !Number.isInteger(d) || !Number.isInteger(y)) {
    return null;
  }

  const fullYear = y < 100 ? 2000 + y : y;

  // ✅ создаём дату в UTC
  const date = new Date(Date.UTC(fullYear, m - 1, d));

  // 🔥 КЛЮЧЕВАЯ ПРОВЕРКА
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
};
