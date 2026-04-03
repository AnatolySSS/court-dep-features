import { isInRange } from './inRange';
import { parseMDY } from './parseMDY';

export type Responsible = {
  percent: number;
  name: string;
  assigned: number;
  completed: number;
};

export type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

export type AggregateConfig = {
  instanceKey: string;
  nameField: string;
  dateAssigned: string;
  dateCompleted: string;
  // dateField: string;
  dateRange?: DateRange;
};

export function aggregateResponsibles(
  data: any[],
  {
    instanceKey,
    nameField,
    dateAssigned,
    dateCompleted,
    dateRange,
  }: AggregateConfig,
): Responsible[] {
  const { startDate, endDate } = dateRange ?? {};

  return Object.values(
    data.reduce((acc: Record<string, Responsible>, item) => {
      const rawName = item[instanceKey]?.[nameField];
      const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();

      if (!name) return acc;

      if (item['Общая информация']?.['Общий номер'] == '4487') {
        console.log(item[instanceKey]?.[dateAssigned]);
      }

      const rawDate = extractDate(item[instanceKey]?.[dateAssigned])?.trim();
      const parsedDate = rawDate ? parseMDY(rawDate) : null;

      const inRange = parsedDate && isInRange(parsedDate, startDate, endDate);

      // 🔥 ФИЛЬТРАЦИЯ ПО ДАТЕ
      if (startDate && endDate && !inRange) {
        return acc;
      }

      // Создаем запись, если её нет
      if (!acc[name]) {
        acc[name] = { name, assigned: 0, completed: 0, percent: 0 };
      }

      //Если нет даты или дата в диапазоне, то считаем все
      if ((!startDate && !endDate) || inRange) {
        acc[name].assigned += 1;
      }

      //Если есть дата и она в диапазоне, то считаем выполненные
      if (parsedDate && item[instanceKey]?.[dateCompleted])
        acc[name].completed += 1;

      acc[name].percent = acc[name].assigned
        ? acc[name].completed / acc[name].assigned
        : 0;

      return acc;
    }, {}),
  );
}

const extractDate = (str: string) => {
  if (isValidDateFormat(str)) return str;

  const match = str?.match(/\b(\d{2}\.\d{2}(?:\.\d{2,4})?)\b/);
  return match ? match[1] : null;
};

function isValidDateFormat(str: string) {
  return /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(str);
}
