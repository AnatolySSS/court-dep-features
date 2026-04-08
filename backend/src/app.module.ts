import { Module } from '@nestjs/common';
import { CourtCasesModule } from './upload/upload.module';

@Module({
  imports: [CourtCasesModule],
})
export class AppModule {}
