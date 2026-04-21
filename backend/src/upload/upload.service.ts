import { mapRows } from './lib/mapRows';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { getPercentageData } from './lib/percentage-data/getPercentageData';
import { addAllTypes } from './lib/addAllTypes';
import { trimSheet } from './lib/trimSheet';
import { getDoneByPeriodData } from './lib/done-by-period-data/getDoneByPeriodData';
import { getInWorkData } from './lib/in-work-data/getInWorkData';
import { formatToMDYIfDate } from './lib/formatToMDY';

@Injectable()
export class CourtCasesService {
  async processExcel(
    file: Express.Multer.File,
    dateRange?: { startDate: Date | null; endDate: Date | null },
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    if (!file.originalname.endsWith('.xlsx')) {
      throw new BadRequestException('Only .xlsx files are allowed');
    }

    const workbook = XLSX.read(file.buffer, { type: 'buffer' });

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    trimSheet(sheet); //ограничивает данные на таблице только заполненными столбцами и ячейками

    const rows = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      raw: true,
      defval: null,
    });

    //Преобразует все даты к формату 4/14/26 (д/м/гг)
    const normalized = rows.map((row: any) =>
      row.map((cell: any, i: number) =>
        i !== 0 ? formatToMDYIfDate(cell) : cell,
      ),
    );

    const data = mapRows(normalized);
    const percentageData = getPercentageData(data, dateRange);
    const doneByPeriodData = getDoneByPeriodData(data, dateRange);
    const inWorkData = getInWorkData(data);
    const finalData = {
      percentage: addAllTypes(percentageData),
      doneByPeriod: addAllTypes(doneByPeriodData),
      inWork: addAllTypes(inWorkData),
    };

    return { finalData, data: [] };
  }
}
