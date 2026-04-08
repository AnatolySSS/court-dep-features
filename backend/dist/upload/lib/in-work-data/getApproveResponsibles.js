"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApproveResponsibles = getApproveResponsibles;
const aggregateApproveInWork_1 = require("./aggregateApproveInWork");
function getApproveResponsibles(data, instanceKey) {
    return (0, aggregateApproveInWork_1.aggregateApproveInWork)(data, {
        instanceKey,
        nameField: 'Согласовант возражения',
        dateAssigned: 'Дата направления на согласование',
        dateCompleted: 'Дата согласования возражения',
    });
}
//# sourceMappingURL=getApproveResponsibles.js.map