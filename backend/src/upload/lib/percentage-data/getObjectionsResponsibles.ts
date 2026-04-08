import { aggregatePercentage, DateRange } from './aggregatePercentage';

export function getObjectionsResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregatePercentage(data, {
    instanceKey,
    nameField: 'Исполнитель',
    dateAssigned: 'Дата распределения в работу возражений',
    dateCompleted: 'Дата направления отзыва',
    dateRange,
  });
}
