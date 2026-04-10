import type { Responsible } from "@/04-features/upload/model/types";

export const buildSheetData = (
  modifiedData: any,
  field: "typeResponsibles" | "objectionResponsibles" | "approveResponsibles" | "allTypeResponsibles",
  statTypes: string,
) => {
  const map = new Map<string, any>();

  for (const instanceKey of Object.keys(modifiedData)) {
    if (instanceKey === "allInstances") continue;

    const instance = modifiedData[instanceKey];
    const list: Responsible[] = (instance?.[field] ?? [])
      .slice() // 👈 делаем копию
      .sort((a: Responsible, b: Responsible) => a.name.localeCompare(b.name, "ru", { sensitivity: "base" }));

    for (const item of list) {
      const key = item.name.trim();

      if (!map.has(key)) {
        map.set(key, {
          name: item.name,
          first: 0,
          appeal: 0,
          cass: 0,
          cass2: 0,
          total: 0,
        });
      }

      const row = map.get(key);

      // сопоставляем ключ инстанции → колонку
      if (instanceKey.includes("first")) row.first += item[statTypes as keyof typeof item];
      if (instanceKey.includes("appeal")) row.appeal += item[statTypes as keyof typeof item];
      if (instanceKey.includes("cass2")) row.cass2 += item[statTypes as keyof typeof item];
      else if (instanceKey.includes("cass")) row.cass += item[statTypes as keyof typeof item];

      row.total += item[statTypes as keyof typeof item];
    }
  }

  return Array.from(map.values()).map((r) => ({
    ФИО: r.name,
    "Первая инстанция": r.first,
    "Апелляционная инстанция": r.appeal,
    "Кассационная инстанция": r.cass,
    "Кассационная инстанция 2": r.cass2,
    Всего: r.total,
  }));
};
