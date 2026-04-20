"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateObjectionsInWork = aggregateObjectionsInWork;
function aggregateObjectionsInWork(data, { instanceKey, nameField, dateAssigned, dateCompleted, isReady, }) {
    const result = Object.values(data.reduce((acc, item) => {
        const rawName = item[instanceKey]?.[nameField];
        const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();
        if (!name)
            return acc;
        if (!acc[name]) {
            acc[name] = { name, inWork: 0 };
        }
        if (item[instanceKey]?.[dateAssigned] &&
            !item[instanceKey]?.[dateCompleted] &&
            (item[instanceKey]?.[isReady]?.toLowerCase() === 'отзыв готов' ||
                !item[instanceKey]?.[isReady])) {
            acc[name].inWork += 1;
        }
        return acc;
    }, {}));
    return result.filter((responsible) => responsible.inWork > 0);
}
//# sourceMappingURL=aggregateObjectionsInWork.js.map