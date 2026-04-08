import { aggregateDoneByPeriod, DateRange } from './aggregateDoneByPeriod';

export function getObjectionsResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateDoneByPeriod(data, {
    instanceKey,
    nameField: 'Исполнитель',
    dateField: 'Дата направления отзыва',
    dateRange,
  });
}
