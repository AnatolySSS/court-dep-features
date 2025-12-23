import { log } from 'console';
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
  dateField: string;
  dateRange?: DateRange;
};

export function aggregateResponsibles(
  data: any[],
  { instanceKey, nameField, dateField, dateRange }: AggregateConfig,
): Responsible[] {
  const { startDate, endDate } = dateRange ?? {};

  return Object.values(
    data.reduce((acc: Record<string, Responsible>, item) => {
      const rawName = item[instanceKey]?.[nameField];
      const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();

      if (!name) return acc;

      const rawDate = item[instanceKey]?.[dateField];
      const parsedDate = rawDate ? parseMDY(rawDate) : null;

      // Если дата невалидна, логируем и пропускаем
      if (!parsedDate) {
        return acc;
      }

      // 🔥 ФИЛЬТРАЦИЯ ПО ДАТЕ
      if (parsedDate && !isInRange(parsedDate, startDate, endDate)) {
        return acc;
      }

      if (!acc[name]) {
        acc[name] = { name, assigned: 0, completed: 0, percent: 0 };
      }

      acc[name].assigned += 1;
      if (parsedDate) acc[name].completed += 1;

      acc[name].percent = acc[name].assigned
        ? acc[name].completed / acc[name].assigned
        : 0;

      return acc;
    }, {}),
  );
}
