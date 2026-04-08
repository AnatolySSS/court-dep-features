import { aggregateDoneByPeriod, DateRange } from './aggregateDoneByPeriod';

export function getTypeResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateDoneByPeriod(data, {
    instanceKey,
    nameField: 'Ответственный за типизацию иска',
    dateField: 'Дата типизации',
    dateRange,
  });
}
