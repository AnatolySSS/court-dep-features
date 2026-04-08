import { aggregateDoneByPeriod, DateRange } from './aggregateDoneByPeriod';

export function getApproveResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateDoneByPeriod(data, {
    instanceKey,
    nameField: 'Согласовант возражения',
    dateField: 'Дата согласования возражения',
    dateRange,
  });
}
