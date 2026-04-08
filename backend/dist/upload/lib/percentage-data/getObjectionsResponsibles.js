"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectionsResponsibles = getObjectionsResponsibles;
const aggregatePercentage_1 = require("./aggregatePercentage");
function getObjectionsResponsibles(data, instanceKey, dateRange) {
    return (0, aggregatePercentage_1.aggregatePercentage)(data, {
        instanceKey,
        nameField: 'Исполнитель',
        dateAssigned: 'Дата распределения в работу возражений',
        dateCompleted: 'Дата направления отзыва',
        dateRange,
    });
}
//# sourceMappingURL=getObjectionsResponsibles.js.map