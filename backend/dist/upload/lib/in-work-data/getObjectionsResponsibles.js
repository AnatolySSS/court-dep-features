"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectionsResponsibles = getObjectionsResponsibles;
const aggregateObjectionsInWork_1 = require("./aggregateObjectionsInWork");
function getObjectionsResponsibles(data, instanceKey) {
    return (0, aggregateObjectionsInWork_1.aggregateObjectionsInWork)(data, {
        instanceKey,
        nameField: 'Исполнитель',
        dateAssigned: 'Дата распределения в работу возражений',
        dateCompleted: 'Дата направления отзыва',
        isReady: 'Отзыв готов',
    });
}
//# sourceMappingURL=getObjectionsResponsibles.js.map