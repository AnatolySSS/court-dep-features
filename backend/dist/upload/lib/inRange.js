"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInRange = void 0;
const isInRange = (date, start, end) => {
    if (start && date < start)
        return false;
    if (end && date > end)
        return false;
    return true;
};
exports.isInRange = isInRange;
//# sourceMappingURL=inRange.js.map