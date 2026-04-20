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
  isReady: string;
};

export function aggregateObjectionsInWork(
  data: any[],
  {
    instanceKey,
    nameField,
    dateAssigned,
    dateCompleted,
    isReady,
  }: AggregateConfig,
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
      if (
        item[instanceKey]?.[dateAssigned] && // Проверяем, что дата назначения есть
        !item[instanceKey]?.[dateCompleted] && // Проверяем, что даты направления отзыва нет
        (item[instanceKey]?.[isReady]?.toLowerCase() === 'отзыв готов' ||
          !item[instanceKey]?.[isReady]) // Проверяем, что отзыв готов или поле пустое
      ) {
        acc[name].inWork += 1;
      }

      return acc;
    }, {}),
  );

  return result.filter((responsible: Responsible) => responsible.inWork > 0);
}
