import { aggregateResponsibles, DateRange } from './aggregateResponsibles';

export function getTypeResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: 'Ответственный за типизацию иска',
    dateAssigned: 'Ответственный за типизацию иска',
    dateCompleted: 'Дата типизации',
    // dateField: 'Дата типизации',
    dateRange,
  });
}
