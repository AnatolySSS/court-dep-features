type Responsible = {
  name: string;
  assigned: number;
  completed: number;
  percent: number;
};

export const buildSheetData = (
  totalTypes: any,
  field: "typeResponsibles" | "objectionResponsibles" | "allTypeResponsibles"
) => {
  const map = new Map<string, any>();

  for (const instanceKey of Object.keys(totalTypes)) {
    if (instanceKey === "allInstances") continue;

    const instance = totalTypes[instanceKey];
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
      if (instanceKey.includes("first")) row.first += item.assigned;
      if (instanceKey.includes("appeal")) row.appeal += item.assigned;
      if (instanceKey.includes("cass2")) row.cass2 += item.assigned;
      else if (instanceKey.includes("cass")) row.cass += item.assigned;

      row.total += item.assigned;
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
