"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateResponsibles = aggregateResponsibles;
function aggregateResponsibles(data, { instanceKey, nameField, dateField }) {
    return Object.values(data.reduce((acc, item) => {
        const rawName = item[instanceKey]?.[nameField];
        const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();
        const date = item[instanceKey]?.[dateField];
        if (!name)
            return acc;
        if (!acc[name]) {
            acc[name] = { name, assigned: 0, completed: 0, percent: 0 };
        }
        acc[name].assigned += 1;
        if (date)
            acc[name].completed += 1;
        acc[name].percent = acc[name].assigned
            ? acc[name].completed / acc[name].assigned
            : 0;
        return acc;
    }, {}));
}
//# sourceMappingURL=aggregateResponsibles.js.map