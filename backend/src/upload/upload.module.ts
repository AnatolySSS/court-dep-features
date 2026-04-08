import { Module } from '@nestjs/common';
import { CourtCasesService } from './upload.service';
import { CourtCasesController } from './upload.controller';

@Module({
  controllers: [CourtCasesController],
  providers: [CourtCasesService],
})
export class CourtCasesModule {}
