import { CourtCasesService } from './upload.service';
import 'multer';
export declare class CourtCasesController {
    private readonly courtCasesService;
    constructor(courtCasesService: CourtCasesService);
    uploadExcel(file: Express.Multer.File, startDate?: string, endDate?: string): Promise<{
        finalData: {
            percentage: any;
            doneByPeriod: any;
            inWork: any;
        };
        data: never[];
    }>;
}
