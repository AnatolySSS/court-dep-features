import { aggregateResponsibles } from "./aggregateResponsibles";

export function getObjectionsResponsibles(data: any[], instanceKey: string) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: "Исполнитель",
    dateField: "Дата направления отзыва",
  });
}
