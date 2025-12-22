import type { AggregateConfig, Responsible } from "@/entities/upload/model/types";

export function aggregateResponsibles(
  data: any[],
  { instanceKey, nameField, dateField }: AggregateConfig
): Responsible[] {
  return Object.values(
    data.reduce((acc: Record<string, Responsible>, item) => {
      const rawName = item[instanceKey]?.[nameField];
      const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, "").trim();

      const date = item[instanceKey]?.[dateField];

      if (!name) return acc;

      if (!acc[name]) {
        acc[name] = { name, assigned: 0, completed: 0, percent: 0 };
      }

      acc[name].assigned += 1;
      if (date) acc[name].completed += 1;

      acc[name].percent = acc[name].assigned ? acc[name].completed / acc[name].assigned : 0;

      return acc;
    }, {})
  );
}
