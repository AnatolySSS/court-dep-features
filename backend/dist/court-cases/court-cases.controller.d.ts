import { CourtCasesService } from './court-cases.service';
import { CreateCourtCaseDto } from './dto/create-court-case.dto';
import { UpdateCourtCaseDto } from './dto/update-court-case.dto';
export declare class CourtCasesController {
    private readonly courtCasesService;
    constructor(courtCasesService: CourtCasesService);
    uploadExcel(file: Express.Multer.File): Promise<{
        firstInstance: {
            typeResponsibles: import("./aggregateResponsibles").Responsible[];
            objectionResponsibles: import("./aggregateResponsibles").Responsible[];
        };
        appealInstance: {
            typeResponsibles: import("./aggregateResponsibles").Responsible[];
            objectionResponsibles: import("./aggregateResponsibles").Responsible[];
        };
        cassInstance: {
            typeResponsibles: import("./aggregateResponsibles").Responsible[];
            objectionResponsibles: import("./aggregateResponsibles").Responsible[];
        };
        cass2Instance: {
            typeResponsibles: import("./aggregateResponsibles").Responsible[];
            objectionResponsibles: import("./aggregateResponsibles").Responsible[];
        };
    }>;
    create(createCourtCaseDto: CreateCourtCaseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCourtCaseDto: UpdateCourtCaseDto): string;
    remove(id: string): string;
}
