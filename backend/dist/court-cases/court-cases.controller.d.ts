import { CourtCasesService } from './court-cases.service';
import { CreateCourtCaseDto } from './dto/create-court-case.dto';
import { UpdateCourtCaseDto } from './dto/update-court-case.dto';
export declare class CourtCasesController {
    private readonly courtCasesService;
    constructor(courtCasesService: CourtCasesService);
    uploadExcel(file: Express.Multer.File, startDate?: string, endDate?: string): Promise<{
        finalData: any;
        data: Record<string, any>[];
    }>;
    create(createCourtCaseDto: CreateCourtCaseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCourtCaseDto: UpdateCourtCaseDto): string;
    remove(id: string): string;
}
