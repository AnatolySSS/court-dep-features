"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesService = void 0;
const common_1 = require("@nestjs/common");
const XLSX = require("xlsx");
const modifiedData_1 = require("./modifiedData");
let CourtCasesService = class CourtCasesService {
    async processExcel(file) {
        if (!file) {
            throw new common_1.BadRequestException('File is required');
        }
        if (!file.originalname.endsWith('.xlsx')) {
            throw new common_1.BadRequestException('Only .xlsx files are allowed');
        }
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            raw: false,
            defval: null,
        });
        const data = this.mapRows(rows);
        const modifiedData = (0, modifiedData_1.modifyData)(data);
        console.log(modifiedData);
        return modifiedData;
    }
    parseFilledRows(sheet) {
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
    }
    mapRows(rows) {
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