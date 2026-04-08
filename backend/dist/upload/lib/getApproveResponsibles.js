"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApproveResponsibles = getApproveResponsibles;
const aggregateResponsibles_1 = require("./aggregateResponsibles");
function getApproveResponsibles(data, instanceKey, dateRange) {
    return (0, aggregateResponsibles_1.aggregateResponsibles)(data, {
        instanceKey,
        nameField: 'Согласовант возражения',
        dateAssigned: 'Дата направления на согласование',
        dateCompleted: 'Дата согласования возражения',
        dateRange,
    });
}
//# sourceMappingURL=getApproveResponsibles.js.map