import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourtCaseDto } from './dto/create-court-case.dto';
import { UpdateCourtCaseDto } from './dto/update-court-case.dto';
import * as XLSX from 'xlsx';

@Injectable()
export class CourtCasesService {
  async processExcel(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    if (!file.originalname.endsWith('.xlsx')) {
      throw new BadRequestException('Only .xlsx files are allowed');
    }

    const workbook = XLSX.read(file.buffer, { type: 'buffer' });

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      raw: false,
      defval: null,
    });

    // дальше твоя логика
    return this.mapRows(rows);
  }

  private mapRows(rows: any[]) {
    const groupHeaders = rows[0];
    const keys = rows[1];
    const dataRows = rows.slice(2);

    return dataRows.map((row) => {
      const obj: Record<string, any> = {};
      let currentGroup = '';

      row.forEach((cell, i) => {
        const group = groupHeaders[i] ?? currentGroup;
        currentGroup = group;

        obj[group] ??= {};
        obj[group][keys[i]] = cell;
      });

      return obj;
    });
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
