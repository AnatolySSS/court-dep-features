import { aggregatePercentage, DateRange } from './aggregatePercentage';

export function getTypeResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregatePercentage(data, {
    instanceKey,
    nameField: 'Ответственный за типизацию иска',
    dateAssigned: 'Ответственный за типизацию иска',
    dateCompleted: 'Дата типизации',
    dateRange,
  });
}
