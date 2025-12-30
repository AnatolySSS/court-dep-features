"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllTypes = void 0;
exports.mergeResponsibles = mergeResponsibles;
const addAllTypes = (modifiedData) => {
    const totalTypes = { ...modifiedData };
    const allTypeResponsibles = [];
    const allObjectionResponsibles = [];
    const allApproveResponsibles = [];
    for (const instanceKey in totalTypes) {
        const instance = totalTypes[instanceKey];
        instance.allTypeResponsibles = mergeResponsibles(instance.typeResponsibles, instance.objectionResponsibles, instance.approveResponsibles);
        allTypeResponsibles.push(...instance.typeResponsibles);
        allObjectionResponsibles.push(...instance.objectionResponsibles);
        allApproveResponsibles.push(...instance.approveResponsibles);
    }
    totalTypes.allInstances = {
        typeResponsibles: mergeResponsibles(allTypeResponsibles, [], []),
        objectionResponsibles: mergeResponsibles(allObjectionResponsibles, [], []),
        approveResponsibles: mergeResponsibles(allApproveResponsibles, [], []),
        allTypeResponsibles: mergeResponsibles(allTypeResponsibles, allObjectionResponsibles, allApproveResponsibles),
    };
    return totalTypes;
};
exports.addAllTypes = addAllTypes;
function normalizeName(name) {
    return name.trim().toLowerCase();
}
function mergeResponsibles(typeResponsibles, objectionResponsibles, approveResponsibles) {
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
    approveResponsibles.forEach(add);
    return Array.from(map.values());
}
//# sourceMappingURL=addAllTypes.js.map