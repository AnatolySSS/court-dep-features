import { aggregateTypeInWork, DateRange } from './aggregateTypeInWork';

export function getTypeResponsibles(data: any[], instanceKey: string) {
  return aggregateTypeInWork(data, {
    instanceKey,
    nameField: 'Ответственный за типизацию иска',
    dateAssigned: 'Ответственный за типизацию иска',
    dateCompleted: 'Дата типизации',
  });
}
