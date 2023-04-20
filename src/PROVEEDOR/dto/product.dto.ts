import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateProveedorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  lastname: string;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(5)
  phone: number;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(10)
  identificationcard: string;

  @IsNumber()
  @IsNotEmpty()
  g_mail: string;

  @IsNotEmpty()
  bank_accounts: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  legal_representative_identification: string;

  
}