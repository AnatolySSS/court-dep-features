export declare class CourtCasesService {
    processExcel(file: Express.Multer.File, dateRange?: {
        startDate: Date | null;
        endDate: Date | null;
    }): Promise<{
        finalData: any;
        data: never[];
    }>;
}
