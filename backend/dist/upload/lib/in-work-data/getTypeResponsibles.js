"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeResponsibles = getTypeResponsibles;
const aggregateTypeInWork_1 = require("./aggregateTypeInWork");
function getTypeResponsibles(data, instanceKey) {
    return (0, aggregateTypeInWork_1.aggregateTypeInWork)(data, {
        instanceKey,
        nameField: 'Ответственный за типизацию иска',
        dateAssigned: 'Ответственный за типизацию иска',
        dateCompleted: 'Дата типизации',
    });
}
//# sourceMappingURL=getTypeResponsibles.js.map