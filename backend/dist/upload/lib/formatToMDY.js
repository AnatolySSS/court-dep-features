"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToMDYIfDate = formatToMDYIfDate;
const XLSX = require("xlsx");
function formatToMDYIfDate(value) {
    let date = null;
    if (typeof value === 'number') {
        const parsed = XLSX.SSF.parse_date_code(value);
        if (parsed) {
            date = new Date(parsed.y, parsed.m - 1, parsed.d);
        }
    }
    if (typeof value === 'string') {
        let match;
        match = value.match(/^(\d{2})[./](\d{2})[./](\d{4})$/);
        if (match) {
            const [, dd, mm, yyyy] = match;
            date = new Date(+yyyy, +mm - 1, +dd);
        }
        if (!date) {
            match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
            if (match) {
                const [, yyyy, mm, dd] = match;
                date = new Date(+yyyy, +mm - 1, +dd);
            }
        }
    }
    if (!date || isNaN(date.getTime())) {
        return value;
    }
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const y = date.getFullYear() % 100;
    return `${m}/${d}/${y}`;
}
//# sourceMappingURL=formatToMDY.js.map