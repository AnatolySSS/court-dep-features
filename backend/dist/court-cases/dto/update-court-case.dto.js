"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourtCaseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_court_case_dto_1 = require("./create-court-case.dto");
class UpdateCourtCaseDto extends (0, mapped_types_1.PartialType)(create_court_case_dto_1.CreateCourtCaseDto) {
}
exports.UpdateCourtCaseDto = UpdateCourtCaseDto;
//# sourceMappingURL=update-court-case.dto.js.map