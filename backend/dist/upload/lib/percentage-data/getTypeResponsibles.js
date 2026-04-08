"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeResponsibles = getTypeResponsibles;
const aggregatePercentage_1 = require("./aggregatePercentage");
function getTypeResponsibles(data, instanceKey, dateRange) {
    return (0, aggregatePercentage_1.aggregatePercentage)(data, {
        instanceKey,
        nameField: 'Ответственный за типизацию иска',
        dateAssigned: 'Ответственный за типизацию иска',
        dateCompleted: 'Дата типизации',
        dateRange,
    });
}
//# sourceMappingURL=getTypeResponsibles.js.map