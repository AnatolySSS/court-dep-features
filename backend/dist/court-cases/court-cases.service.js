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
const modifiedData_1 = require("./lib/modifiedData");
const addAllTypes_1 = require("./lib/addAllTypes");
const trimSheet_1 = require("./lib/trimSheet");
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
            raw: false,
            defval: null,
        });
        const data = (0, mapRows_1.mapRows)(rows);
        const modifiedData = (0, modifiedData_1.modifyData)(data, dateRange);
        const finalData = (0, addAllTypes_1.addAllTypes)(modifiedData);
        return { finalData, data };
    }
    create(createCourtCaseDto) {
        return 'This action adds a new courtCase';
    }
    findAll() {
        return `This action returns all courtCases`;
    }
    findOne(id) {
        return `This action returns a #${id} courtCase`;
    }
    update(id, updateCourtCaseDto) {
        return `This action updates a #${id} courtCase`;
    }
    remove(id) {
        return `This action removes a #${id} courtCase`;
    }
};
exports.CourtCasesService = CourtCasesService;
exports.CourtCasesService = CourtCasesService = __decorate([
    (0, common_1.Injectable)()
], CourtCasesService);
//# sourceMappingURL=court-cases.service.js.map