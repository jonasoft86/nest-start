import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
