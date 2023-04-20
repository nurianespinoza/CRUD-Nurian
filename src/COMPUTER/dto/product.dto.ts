import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateComputerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(10)
  processor: string;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(5)
  RAM: string;

  @IsNumber()
  @IsNotEmpty()
  Discoduro: string;

  @IsNotEmpty()
  pantalla: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  brand: string;

  
}