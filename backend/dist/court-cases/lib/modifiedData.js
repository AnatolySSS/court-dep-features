"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyData = void 0;
const getObjectionsResponsibles_1 = require("./getObjectionsResponsibles");
const getTypeResponsibles_1 = require("./getTypeResponsibles");
const modifyData = (data, dateRange) => {
    return {
        firstInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Первая инстанция', dateRange),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Первая инстанция', dateRange),
        },
        appealInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Апелляционная инстанция', dateRange),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Апелляционная инстанция', dateRange),
        },
        cassInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Кассационная инстанция', dateRange),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Кассационная инстанция', dateRange),
        },
        cass2Instance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Кассационная инстанция 2', dateRange),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Кассационная инстанция 2', dateRange),
        },
    };
};
exports.modifyData = modifyData;
//# sourceMappingURL=modifiedData.js.map