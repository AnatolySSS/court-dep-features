import { CreateCourtCaseDto } from './dto/create-court-case.dto';
import { UpdateCourtCaseDto } from './dto/update-court-case.dto';
export declare class CourtCasesService {
    processExcel(file: Express.Multer.File, dateRange?: {
        startDate: Date | null;
        endDate: Date | null;
    }): Promise<any>;
    create(createCourtCaseDto: CreateCourtCaseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourtCaseDto: UpdateCourtCaseDto): string;
    remove(id: number): string;
}
