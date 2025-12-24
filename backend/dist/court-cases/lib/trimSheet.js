"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimSheet = trimSheet;
const XLSX = require("xlsx");
function trimSheet(sheet) {
    const range = XLSX.utils.decode_range(sheet['!ref']);
    let lastRow = 0;
    for (let R = range.e.r; R >= range.s.r; R--) {
        const cell = sheet[XLSX.utils.encode_cell({ r: R, c: 0 })];
        if (cell && cell.v != null && cell.v !== '') {
            lastRow = R;
            break;
        }
    }
    let lastCol = 0;
    for (let C = range.e.c; C >= range.s.c; C--) {
        const cell = sheet[XLSX.utils.encode_cell({ r: 1, c: C })];
        if (cell && cell.v != null && cell.v !== '') {
            lastCol = C;
            break;
        }
    }
    sheet['!ref'] = XLSX.utils.encode_range({
        s: { r: range.s.r, c: range.s.c },
        e: { r: lastRow, c: lastCol },
    });
}
//# sourceMappingURL=trimSheet.js.map