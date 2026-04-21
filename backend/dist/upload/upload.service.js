"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesService = void 0;
const mapRows_1 = require("./lib/mapRows");
const common_1 = require("@nestjs/common");
const XLSX = require("xlsx");
const getPercentageData_1 = require("./lib/percentage-data/getPercentageData");
const addAllTypes_1 = require("./lib/addAllTypes");
const trimSheet_1 = require("./lib/trimSheet");
const getDoneByPeriodData_1 = require("./lib/done-by-period-data/getDoneByPeriodData");
const getInWorkData_1 = require("./lib/in-work-data/getInWorkData");
const formatToMDY_1 = require("./lib/formatToMDY");
let CourtCasesService = class CourtCasesService {
    async processExcel(file, dateRange) {
        if (!file) {
            throw new common_1.BadRequestException('File is required');
        }
        if (!file.originalname.endsWith('.xlsx')) {
            throw new common_1.BadRequestException('Only .xlsx files are allowed');
        }
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        (0, trimSheet_1.trimSheet)(sheet);
        const rows = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            raw: true,
            defval: null,
        });
        const normalized = rows.map((row) => row.map((cell, i) => i !== 0 ? (0, formatToMDY_1.formatToMDYIfDate)(cell) : cell));
        const data = (0, mapRows_1.mapRows)(normalized);
        const percentageData = (0, getPercentageData_1.getPercentageData)(data, dateRange);
        const doneByPeriodData = (0, getDoneByPeriodData_1.getDoneByPeriodData)(data, dateRange);
        const inWorkData = (0, getInWorkData_1.getInWorkData)(data);
        const finalData = {
            percentage: (0, addAllTypes_1.addAllTypes)(percentageData),
            doneByPeriod: (0, addAllTypes_1.addAllTypes)(doneByPeriodData),
            inWork: (0, addAllTypes_1.addAllTypes)(inWorkData),
        };
        return { finalData, data: [] };
    }
};
exports.CourtCasesService = CourtCasesService;
exports.CourtCasesService = CourtCasesService = __decorate([
    (0, common_1.Injectable)()
], CourtCasesService);
//# sourceMappingURL=upload.service.js.map