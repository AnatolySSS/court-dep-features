import { aggregateResponsibles } from "./aggregateResponsibles";

export function getTypeResponsibles(data: any[], instanceKey: string) {
  return aggregateResponsibles(data, {
    instanceKey,
    nameField: "Ответственный за типизацию иска",
    dateField: "Срок исполнения",
  });
}
