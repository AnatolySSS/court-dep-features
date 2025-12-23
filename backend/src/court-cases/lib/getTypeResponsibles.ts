import { aggregateResponsibles, DateRange } from './aggregateResponsibles';

export function getTypeResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: 'Ответственный за типизацию иска',
    dateField: 'Дата типизации',
    dateRange,
  });
}
