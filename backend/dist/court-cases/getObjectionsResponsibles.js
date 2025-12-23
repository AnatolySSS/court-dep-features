"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectionsResponsibles = getObjectionsResponsibles;
const aggregateResponsibles_1 = require("./aggregateResponsibles");
function getObjectionsResponsibles(data, instanceKey) {
    return (0, aggregateResponsibles_1.aggregateResponsibles)(data, {
        instanceKey,
        nameField: 'Исполнитель',
        dateField: 'Дата направления отзыва',
    });
}
//# sourceMappingURL=getObjectionsResponsibles.js.map