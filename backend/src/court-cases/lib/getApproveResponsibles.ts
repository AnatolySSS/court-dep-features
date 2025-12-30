import { aggregateResponsibles, DateRange } from './aggregateResponsibles';

export function getApproveResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: 'Согласовант возражения',
    dateField: 'Дата согласования возражения',
    dateRange,
  });
}
