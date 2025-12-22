import { Module } from '@nestjs/common';
import { CourtCasesService } from './court-cases.service';
import { CourtCasesController } from './court-cases.controller';

@Module({
  controllers: [CourtCasesController],
  providers: [CourtCasesService],
})
export class CourtCasesModule {}
