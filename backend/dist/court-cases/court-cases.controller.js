"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesController = void 0;
const common_1 = require("@nestjs/common");
const court_cases_service_1 = require("./court-cases.service");
const create_court_case_dto_1 = require("./dto/create-court-case.dto");
const update_court_case_dto_1 = require("./dto/update-court-case.dto");
const platform_express_1 = require("@nestjs/platform-express");
let CourtCasesController = class CourtCasesController {
    courtCasesService;
    constructor(courtCasesService) {
        this.courtCasesService = courtCasesService;
    }
    uploadExcel(file) {
        return this.courtCasesService.processExcel(file);
    }
    create(createCourtCaseDto) {
        return this.courtCasesService.create(createCourtCaseDto);
    }
    findAll() {
        return this.courtCasesService.findAll();
    }
    findOne(id) {
        return this.courtCasesService.findOne(+id);
    }
    update(id, updateCourtCaseDto) {
        return this.courtCasesService.update(+id, updateCourtCaseDto);
    }
    remove(id) {
        return this.courtCasesService.remove(+id);
    }
};
exports.CourtCasesController = CourtCasesController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourtCasesController.prototype, "uploadExcel", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_court_case_dto_1.CreateCourtCaseDto]),
    __metadata("design:returntype", void 0)
], CourtCasesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourtCasesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourtCasesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_court_case_dto_1.UpdateCourtCaseDto]),
    __metadata("design:returntype", void 0)
], CourtCasesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourtCasesController.prototype, "remove", null);
exports.CourtCasesController = CourtCasesController = __decorate([
    (0, common_1.Controller)('court-cases'),
    __metadata("design:paramtypes", [court_cases_service_1.CourtCasesService])
], CourtCasesController);
//# sourceMappingURL=court-cases.controller.js.map