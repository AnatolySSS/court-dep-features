"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectionsResponsibles = getObjectionsResponsibles;
const aggregateDoneByPeriod_1 = require("./aggregateDoneByPeriod");
function getObjectionsResponsibles(data, instanceKey, dateRange) {
    return (0, aggregateDoneByPeriod_1.aggregateDoneByPeriod)(data, {
        instanceKey,
        nameField: 'Исполнитель',
        dateField: 'Дата направления отзыва',
        dateRange,
    });
}
//# sourceMappingURL=getObjectionsResponsibles.js.map