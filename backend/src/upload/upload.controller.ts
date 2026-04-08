import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CourtCasesService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import 'multer';

@Controller()
export class CourtCasesController {
  constructor(private readonly courtCasesService: CourtCasesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadExcel(
    @UploadedFile() file: Express.Multer.File,
    @Body('startDate') startDate?: string,
    @Body('endDate') endDate?: string,
  ) {
    return this.courtCasesService.processExcel(file, {
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    });
  }
}
