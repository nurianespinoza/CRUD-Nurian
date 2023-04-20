import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Delete, Patch } from "@nestjs/common";
import { ComputerService } from "./computerservice";
import { CreateComputerDto } from "./dto/product.dto";

@Controller('computer')
export class ComputerController {
    constructor (
        private readonly computerServiceRepo: ComputerService) {}

        //metodo para crear un producto
        @Post()
        create(@Body() computerdto: CreateComputerDto) {
            return this.computerServiceRepo.create(computerdto)
        }

        //metodo para mostrar los productos
        @Get()
        findAll() {
            return this.computerServiceRepo.findAll();
        }

        //metodo para mostrar un producto especifico
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: string) {
                return this.computerServiceRepo.findOne(id);
            } 

        // Para eliminar   
        @Delete(':id')
        remove(@Param('id', ParseUUIDPipe) id: string) {
            return this.computerServiceRepo.remove(id);
        }

        // crear metodo patch, para actualizar 
        @Patch(':id')
        update(
            @Param('id', ParseUUIDPipe) id: string,
            @Body() updateComputerDto: CreateComputerDto,
        ){
        return this.computerServiceRepo.update(id, updateComputerDto);
  }
}


