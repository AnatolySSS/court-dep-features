"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyData = void 0;
const getObjectionsResponsibles_1 = require("./getObjectionsResponsibles");
const getTypeResponsibles_1 = require("./getTypeResponsibles");
const modifyData = (data) => {
    return {
        firstInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, "Первая инстанция"),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, "Первая инстанция"),
        },
        appealInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, "Апелляционная инстанция"),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, "Апелляционная инстанция"),
        },
        cassInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, "Кассационная инстанция"),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, "Кассационная инстанция"),
        },
        cass2Instance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, "Кассационная инстанция 2"),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, "Кассационная инстанция 2"),
        },
    };
};
exports.modifyData = modifyData;
//# sourceMappingURL=modifiedData.js.map