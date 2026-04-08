import {
  aggregateObjectionsInWork,
  DateRange,
} from './aggregateObjectionsInWork';

export function getObjectionsResponsibles(data: any[], instanceKey: string) {
  return aggregateObjectionsInWork(data, {
    instanceKey,
    nameField: 'Исполнитель',
    dateAssigned: 'Дата распределения в работу возражений',
    dateCompleted: 'Дата направления отзыва',
    isReady: 'Отзыв готов',
  });
}
