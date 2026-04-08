type Responsible = {
  name: string;
  assigned: number;
  completed: number;
  inWork?: number;
  percent: number;
};

// Функция для добавления общего списка ответственных за все типы дел
export const addAllTypes = (modifiedData: any) => {
  const totalTypes = { ...modifiedData };

  const allTypeResponsibles: Responsible[] = [];
  const allObjectionResponsibles: Responsible[] = [];
  const allApproveResponsibles: Responsible[] = [];

  // allTypeResponsibles для конкретной инстанции
  for (const instanceKey in totalTypes) {
    const instance = totalTypes[instanceKey];

    instance.allTypeResponsibles = mergeResponsibles(
      instance.typeResponsibles,
      instance.objectionResponsibles,
      instance.approveResponsibles,
    );

    // накапливаем данные для allInstances
    allTypeResponsibles.push(...instance.typeResponsibles);
    allObjectionResponsibles.push(...instance.objectionResponsibles);
    allApproveResponsibles.push(...instance.approveResponsibles);
  }

  // агрегированные данные по всем инстанциям
  totalTypes.allInstances = {
    typeResponsibles: mergeResponsibles(allTypeResponsibles, [], []),
    objectionResponsibles: mergeResponsibles(allObjectionResponsibles, [], []),
    approveResponsibles: mergeResponsibles(allApproveResponsibles, [], []),
    allTypeResponsibles: mergeResponsibles(
      allTypeResponsibles,
      allObjectionResponsibles,
      allApproveResponsibles,
    ),
  };

  return totalTypes;
};

// Нормализация имени для использования в качестве ключа
function normalizeName(name: string) {
  return name.trim().toLowerCase();
}

// Функция для объединения двух списков ответственных
export function mergeResponsibles(
  typeResponsibles: Responsible[],
  objectionResponsibles: Responsible[],
  approveResponsibles: Responsible[],
): Responsible[] {
  const map = new Map<string, Responsible>();

  const add = (item: Responsible) => {
    const key = normalizeName(item.name);

    if (!map.has(key)) {
      map.set(key, { ...item });
      return;
    }

    const existing = map.get(key)!;

    const assigned = existing.assigned + item.assigned;
    const completed = existing.completed + item.completed;
    const inWork = existing.inWork
      ? existing.inWork + (item.inWork || 0)
      : item.inWork || 0;

    map.set(key, {
      name: existing.name, // оставляем первое «красивое» имя
      assigned,
      completed,
      inWork,
      percent: assigned === 0 ? 0 : completed / assigned,
    });
  };

  typeResponsibles.forEach(add);
  objectionResponsibles.forEach(add);
  approveResponsibles.forEach(add);

  return Array.from(map.values());
}
