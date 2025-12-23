"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRows = void 0;
const mapRows = (rows) => {
    const groupHeaders = rows[0];
    const keys = rows[1];
    const dataRows = rows.slice(2);
    return dataRows.map((row) => {
        const obj = {};
        let currentGroup = '';
        row.forEach((cell, i) => {
            const group = groupHeaders[i] ?? currentGroup;
            currentGroup = group;
            obj[group] ??= {};
            obj[group][keys[i]] = cell;
        });
        return obj;
    });
};
exports.mapRows = mapRows;
//# sourceMappingURL=mapRows.js.map