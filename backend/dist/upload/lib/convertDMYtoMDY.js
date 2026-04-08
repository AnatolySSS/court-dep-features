"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDMYtoMDY = void 0;
const convertDMYtoMDY = (dateStr) => {
    if (!dateStr)
        return null;
    const parts = dateStr.split('.');
    if (parts.length !== 3)
        return null;
    const [d, m, y] = parts.map(Number);
    if (!Number.isInteger(d) || !Number.isInteger(m) || !Number.isInteger(y)) {
        return null;
    }
    if (d < 1 || d > 31 || m < 1 || m > 12) {
        return null;
    }
    return `${m}/${d}/${y}`;
};
exports.convertDMYtoMDY = convertDMYtoMDY;
//# sourceMappingURL=convertDMYtoMDY.js.map