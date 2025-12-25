import { mapRows } from './lib/mapRows';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourtCaseDto } from './dto/create-court-case.dto';
import { UpdateCourtCaseDto } from './dto/update-court-case.dto';
import * as XLSX from 'xlsx';
import { modifyData } from './lib/modifiedData';
import { addAllTypes } from './lib/addAllTypes';
import { trimSheet } from './lib/trimSheet';

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
    trimSheet(sheet);

    const rows = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      raw: false,
      defval: null,
    });

    const data = mapRows(rows);
    const modifiedData = modifyData(data, dateRange);
    const finalData = addAllTypes(modifiedData);

    return { finalData, data };
  }

  create(createCourtCaseDto: CreateCourtCaseDto) {
    return 'This action adds a new courtCase';
  }

  findAll() {
    return `This action returns all courtCases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courtCase`;
  }

  update(id: number, updateCourtCaseDto: UpdateCourtCaseDto) {
    return `This action updates a #${id} courtCase`;
  }

  remove(id: number) {
    return `This action removes a #${id} courtCase`;
  }
}
