import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CourtCasesService } from './court-cases.service';
import { CreateCourtCaseDto } from './dto/create-court-case.dto';
import { UpdateCourtCaseDto } from './dto/update-court-case.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('court-cases')
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

  @Post()
  create(@Body() createCourtCaseDto: CreateCourtCaseDto) {
    return this.courtCasesService.create(createCourtCaseDto);
  }

  @Get()
  findAll() {
    return this.courtCasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courtCasesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourtCaseDto: UpdateCourtCaseDto,
  ) {
    return this.courtCasesService.update(+id, updateCourtCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courtCasesService.remove(+id);
  }
}
