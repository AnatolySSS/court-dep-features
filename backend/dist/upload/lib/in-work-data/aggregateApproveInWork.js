"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateApproveInWork = aggregateApproveInWork;
function aggregateApproveInWork(data, { instanceKey, nameField, dateAssigned, dateCompleted }) {
    const result = Object.values(data.reduce((acc, item) => {
        const rawName = item[instanceKey]?.[nameField];
        const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();
        if (!name)
            return acc;
        if (!acc[name]) {
            acc[name] = { name, inWork: 0 };
        }
        if (item[instanceKey]?.[dateAssigned] &&
            !item[instanceKey]?.[dateCompleted]) {
            acc[name].inWork += 1;
        }
        return acc;
    }, {}));
    return result.filter((responsible) => responsible.inWork > 0);
}
//# sourceMappingURL=aggregateApproveInWork.js.map