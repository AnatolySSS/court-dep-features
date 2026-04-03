import { CourtCasesService } from './court-cases.service';
export declare class CourtCasesController {
    private readonly courtCasesService;
    constructor(courtCasesService: CourtCasesService);
    uploadExcel(file: Express.Multer.File, startDate?: string, endDate?: string): Promise<{
        finalData: any;
        data: never[];
    }>;
}
