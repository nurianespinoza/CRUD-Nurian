import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Computer } from './entities/products.entity';
import { ComputerService } from './computerservice';
import { ComputerController } from './computer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ Computer])],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputersModule {}