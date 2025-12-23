import { CreateCourtCaseDto } from './dto/create-court-case.dto';
import { UpdateCourtCaseDto } from './dto/update-court-case.dto';
export declare class CourtCasesService {
    processExcel(file: Express.Multer.File): Promise<{
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
    private parseFilledRows;
    private mapRows;
    create(createCourtCaseDto: CreateCourtCaseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourtCaseDto: UpdateCourtCaseDto): string;
    remove(id: number): string;
}
