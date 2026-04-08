import { parseMDY } from '../parseMDY';

export type Responsible = {
  name: string;
  inWork: number;
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
};

export function aggregateTypeInWork(
  data: any[],
  { instanceKey, nameField, dateAssigned, dateCompleted }: AggregateConfig,
): Responsible[] {
  const result: Responsible[] = Object.values<Responsible>(
    data.reduce((acc: Record<string, Responsible>, item) => {
      const rawName = item[instanceKey]?.[nameField];
      const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();

      if (!name) return acc;

      // Создаем запись, если её нет
      if (!acc[name]) {
        acc[name] = { name, inWork: 0 };
      }

      const _dateAssigned = extractDate(
        item[instanceKey]?.[dateAssigned],
      )?.trim();

      const parsedDateAssigned = _dateAssigned ? parseMDY(_dateAssigned) : null;

      if (
        parsedDateAssigned &&
        parsedDateAssigned >= new Date('2026-01-01') &&
        !item[instanceKey]?.[dateCompleted]
      ) {
        acc[name].inWork += 1;
      }

      return acc;
    }, {}),
  );

  return result.filter((responsible: Responsible) => responsible.inWork > 0);
}

const extractDate = (str: string) => {
  if (isValidDateFormat(str)) return str;

  const match = str?.match(/\b(\d{2}\.\d{2}(?:\.\d{2,4})?)\b/);
  return match ? match[1] : null;
};

function isValidDateFormat(str: string) {
  return /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(str);
}
