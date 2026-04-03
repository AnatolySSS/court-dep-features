import { aggregateResponsibles, DateRange } from './aggregateResponsibles';

export function getApproveResponsibles(
  data: any[],
  instanceKey: string,
  dateRange?: DateRange,
) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: 'Согласовант возражения',
    dateAssigned: 'Дата направления на согласование',
    dateCompleted: 'Дата согласования возражения',
    // dateField: 'Дата согласования возражения',
    dateRange,
  });
}
