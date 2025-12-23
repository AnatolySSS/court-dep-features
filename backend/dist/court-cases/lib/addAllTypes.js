"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllTypes = void 0;
exports.mergeResponsibles = mergeResponsibles;
const addAllTypes = (modifiedData) => {
    const totalTypes = { ...modifiedData };
    const allTypeResponsibles = [];
    const allObjectionResponsibles = [];
    for (const instanceKey in totalTypes) {
        const instance = totalTypes[instanceKey];
        instance.allTypeResponsibles = mergeResponsibles(instance.typeResponsibles, instance.objectionResponsibles);
        allTypeResponsibles.push(...instance.typeResponsibles);
        allObjectionResponsibles.push(...instance.objectionResponsibles);
    }
    totalTypes.allInstances = {
        typeResponsibles: mergeResponsibles(allTypeResponsibles, []),
        objectionResponsibles: mergeResponsibles(allObjectionResponsibles, []),
        allTypeResponsibles: mergeResponsibles(allTypeResponsibles, allObjectionResponsibles),
    };
    return totalTypes;
};
exports.addAllTypes = addAllTypes;
function normalizeName(name) {
    return name.trim().toLowerCase();
}
function mergeResponsibles(typeResponsibles, objectionResponsibles) {
    const map = new Map();
    const add = (item) => {
        const key = normalizeName(item.name);
        if (!map.has(key)) {
            map.set(key, { ...item });
            return;
        }
        const existing = map.get(key);
        const assigned = existing.assigned + item.assigned;
        const completed = existing.completed + item.completed;
        map.set(key, {
            name: existing.name,
            assigned,
            completed,
            percent: assigned === 0 ? 0 : completed / assigned,
        });
    };
    typeResponsibles.forEach(add);
    objectionResponsibles.forEach(add);
    return Array.from(map.values());
}
//# sourceMappingURL=addAllTypes.js.map