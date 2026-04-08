"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInWorkData = void 0;
const getApproveResponsibles_1 = require("./getApproveResponsibles");
const getObjectionsResponsibles_1 = require("./getObjectionsResponsibles");
const getTypeResponsibles_1 = require("./getTypeResponsibles");
const getInWorkData = (data) => {
    return {
        firstInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Первая инстанция'),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Первая инстанция'),
            approveResponsibles: (0, getApproveResponsibles_1.getApproveResponsibles)(data, 'Первая инстанция'),
        },
        appealInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Апелляционная инстанция'),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Апелляционная инстанция'),
            approveResponsibles: (0, getApproveResponsibles_1.getApproveResponsibles)(data, 'Апелляционная инстанция'),
        },
        cassInstance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Кассационная инстанция'),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Кассационная инстанция'),
            approveResponsibles: (0, getApproveResponsibles_1.getApproveResponsibles)(data, 'Кассационная инстанция'),
        },
        cass2Instance: {
            typeResponsibles: (0, getTypeResponsibles_1.getTypeResponsibles)(data, 'Кассационная инстанция 2'),
            objectionResponsibles: (0, getObjectionsResponsibles_1.getObjectionsResponsibles)(data, 'Кассационная инстанция 2'),
            approveResponsibles: (0, getApproveResponsibles_1.getApproveResponsibles)(data, 'Кассационная инстанция 2'),
        },
    };
};
exports.getInWorkData = getInWorkData;
//# sourceMappingURL=getInWorkData.js.map