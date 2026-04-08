import { aggregateApproveInWork, DateRange } from './aggregateApproveInWork';

export function getApproveResponsibles(data: any[], instanceKey: string) {
  return aggregateApproveInWork(data, {
    instanceKey,
    nameField: 'Согласовант возражения',
    dateAssigned: 'Дата направления на согласование',
    dateCompleted: 'Дата согласования возражения',
  });
}
