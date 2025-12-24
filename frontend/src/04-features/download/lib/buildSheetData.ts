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
    console.log(list);

    for (const item of list) {
      const key = item.name.trim().toLowerCase();

      if (!map.has(key)) {
        map.set(key, {
          name: item.name,
          first: 0,
          appeal: 0,
          cassation: 0,
          cassation2: 0,
          total: 0,
        });
      }

      const row = map.get(key);

      // сопоставляем ключ инстанции → колонку
      if (instanceKey.includes("first")) row.first += item.assigned;
      if (instanceKey.includes("appeal")) row.appeal += item.assigned;
      if (instanceKey.includes("cassation2")) row.cassation2 += item.assigned;
      else if (instanceKey.includes("cassation")) row.cassation += item.assigned;

      row.total += item.assigned;
    }
  }

  return Array.from(map.values()).map((r) => ({
    ФИО: r.name,
    "Первая инстанция": r.first,
    "Апелляционная инстанция": r.appeal,
    "Кассационная инстанция": r.cassation,
    "Кассационная инстанция 2": r.cassation2,
    Всего: r.total,
  }));
};
