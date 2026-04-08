"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApproveResponsibles = getApproveResponsibles;
const aggregateDoneByPeriod_1 = require("./aggregateDoneByPeriod");
function getApproveResponsibles(data, instanceKey, dateRange) {
    return (0, aggregateDoneByPeriod_1.aggregateDoneByPeriod)(data, {
        instanceKey,
        nameField: 'Согласовант возражения',
        dateField: 'Дата согласования возражения',
        dateRange,
    });
}
//# sourceMappingURL=getApproveResponsibles.js.map