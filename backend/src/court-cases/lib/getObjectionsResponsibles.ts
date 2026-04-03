import { aggregateResponsibles, DateRange } from './aggregateResponsibles';

export function getObjectionsResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: 'Исполнитель',
    dateAssigned: 'Дата распределения в работу возражений',
    dateCompleted: 'Дата направления отзыва',
    // dateField: 'Дата направления отзыва',
    dateRange,
  });
}
