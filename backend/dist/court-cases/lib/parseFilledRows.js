"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFilledRows = void 0;
const XLSX = require("xlsx");
const parseFilledRows = (sheet) => {
    const range = XLSX.utils.decode_range(sheet['!ref'] || '');
    const rows = [];
    for (let R = range.s.r; R <= range.e.r; ++R) {
        const row = [];
        let hasValue = false;
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cellAddress = { r: R, c: C };
            const cellRef = XLSX.utils.encode_cell(cellAddress);
            const cell = sheet[cellRef];
            if (cell) {
                row.push(cell.v);
                hasValue = true;
            }
            else {
                row.push(null);
            }
        }
        if (hasValue) {
            rows.push(row);
        }
    }
    return rows;
};
exports.parseFilledRows = parseFilledRows;
//# sourceMappingURL=parseFilledRows.js.map