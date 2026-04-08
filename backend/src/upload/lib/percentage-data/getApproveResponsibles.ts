import { aggregatePercentage, DateRange } from './aggregatePercentage';

export function getApproveResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregatePercentage(data, {
    instanceKey,
    nameField: 'Согласовант возражения',
    dateAssigned: 'Дата направления на согласование',
    dateCompleted: 'Дата согласования возражения',
    dateRange,
  });
}
