import { Module } from '@nestjs/common';
import { CatsService } from './services/cats/cats.service';
import { CatsController } from './controllers/cats/cats.controller';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
