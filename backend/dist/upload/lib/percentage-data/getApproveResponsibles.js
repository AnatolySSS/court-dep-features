"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApproveResponsibles = getApproveResponsibles;
const aggregatePercentage_1 = require("./aggregatePercentage");
function getApproveResponsibles(data, instanceKey, dateRange) {
    return (0, aggregatePercentage_1.aggregatePercentage)(data, {
        instanceKey,
        nameField: 'Согласовант возражения',
        dateAssigned: 'Дата направления на согласование',
        dateCompleted: 'Дата согласования возражения',
        dateRange,
    });
}
//# sourceMappingURL=getApproveResponsibles.js.map