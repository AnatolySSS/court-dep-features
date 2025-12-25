"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMDY = void 0;
const convertDMYtoMDY_1 = require("./convertDMYtoMDY");
const parseMDY = (dateStr) => {
    if (!dateStr)
        return null;
    if (dateStr.includes('.')) {
        const converted = (0, convertDMYtoMDY_1.convertDMYtoMDY)(dateStr);
        if (!converted)
            return null;
        dateStr = converted;
    }
    const parts = dateStr.split('/');
    if (parts.length !== 3)
        return null;
    const [m, d, y] = parts.map(Number);
    if (!Number.isInteger(m) || !Number.isInteger(d) || !Number.isInteger(y)) {
        return null;
    }
    const fullYear = y < 100 ? 2000 + y : y;
    const date = new Date(Date.UTC(fullYear, m - 1, d));
    if (Number.isNaN(date.getTime())) {
        return null;
    }
    return date;
};
exports.parseMDY = parseMDY;
//# sourceMappingURL=parseMDY.js.map