"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeResponsibles = getTypeResponsibles;
const aggregateResponsibles_1 = require("./aggregateResponsibles");
function getTypeResponsibles(data, instanceKey, dateRange) {
    return (0, aggregateResponsibles_1.aggregateResponsibles)(data, {
        instanceKey,
        nameField: 'Ответственный за типизацию иска',
        dateAssigned: 'Ответственный за типизацию иска',
        dateCompleted: 'Дата типизации',
        dateRange,
    });
}
//# sourceMappingURL=getTypeResponsibles.js.map