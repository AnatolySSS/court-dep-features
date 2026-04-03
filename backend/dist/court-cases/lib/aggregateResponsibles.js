"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateResponsibles = aggregateResponsibles;
const inRange_1 = require("./inRange");
const parseMDY_1 = require("./parseMDY");
function aggregateResponsibles(data, { instanceKey, nameField, dateAssigned, dateCompleted, dateRange, }) {
    const { startDate, endDate } = dateRange ?? {};
    return Object.values(data.reduce((acc, item) => {
        const rawName = item[instanceKey]?.[nameField];
        const name = rawName?.replace(/\b\d{2}\.+\d{2}\.*(\d{4})*\b/, '').trim();
        if (!name)
            return acc;
        if (item['Общая информация']?.['Общий номер'] == '4487') {
            console.log(item[instanceKey]?.[dateAssigned]);
        }
        const rawDate = extractDate(item[instanceKey]?.[dateAssigned])?.trim();
        const parsedDate = rawDate ? (0, parseMDY_1.parseMDY)(rawDate) : null;
        const inRange = parsedDate && (0, inRange_1.isInRange)(parsedDate, startDate, endDate);
        if (startDate && endDate && !inRange) {
            return acc;
        }
        if (!acc[name]) {
            acc[name] = { name, assigned: 0, completed: 0, percent: 0 };
        }
        if ((!startDate && !endDate) || inRange) {
            acc[name].assigned += 1;
        }
        if (parsedDate && item[instanceKey]?.[dateCompleted])
            acc[name].completed += 1;
        acc[name].percent = acc[name].assigned
            ? acc[name].completed / acc[name].assigned
            : 0;
        return acc;
    }, {}));
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
//# sourceMappingURL=aggregateResponsibles.js.map