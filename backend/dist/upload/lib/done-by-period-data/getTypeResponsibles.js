"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeResponsibles = getTypeResponsibles;
const aggregateDoneByPeriod_1 = require("./aggregateDoneByPeriod");
function getTypeResponsibles(data, instanceKey, dateRange) {
    return (0, aggregateDoneByPeriod_1.aggregateDoneByPeriod)(data, {
        instanceKey,
        nameField: 'Ответственный за типизацию иска',
        dateField: 'Дата типизации',
        dateRange,
    });
}
//# sourceMappingURL=getTypeResponsibles.js.map