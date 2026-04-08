"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateTypeInWork = aggregateTypeInWork;
const parseMDY_1 = require("../parseMDY");
function aggregateTypeInWork(data, { instanceKey, nameField, dateAssigned, dateCompleted }) {
    const result = Object.values(data.reduce((acc, item) => {
        const rawName = item[instanceKey]?.[nameField];
        const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();
        if (!name)
            return acc;
        if (!acc[name]) {
            acc[name] = { name, inWork: 0 };
        }
        const _dateAssigned = extractDate(item[instanceKey]?.[dateAssigned])?.trim();
        const parsedDateAssigned = _dateAssigned ? (0, parseMDY_1.parseMDY)(_dateAssigned) : null;
        if (parsedDateAssigned &&
            parsedDateAssigned >= new Date('2026-01-01') &&
            !item[instanceKey]?.[dateCompleted]) {
            acc[name].inWork += 1;
        }
        return acc;
    }, {}));
    return result.filter((responsible) => responsible.inWork > 0);
}
const extractDate = (str) => {
    if (isValidDateFormat(str))
        return str;
    const match = str?.match(/\b(\d{2}\.\d{2}(?:\.\d{2,4})?)\b/);
    return match ? match[1] : null;
};
function isValidDateFormat(str) {
    return /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(str);
}
//# sourceMappingURL=aggregateTypeInWork.js.map