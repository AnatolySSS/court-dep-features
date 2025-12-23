import { aggregateResponsibles, DateRange } from './aggregateResponsibles';

export function getObjectionsResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: 'Исполнитель',
    dateField: 'Дата направления отзыва',
    dateRange,
  });
}
