import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Delete, Patch } from "@nestjs/common";
import { ProveedorService } from "./proveedor.service";
import { CreateProveedorDto } from "./dto/product.dto";

@Controller('proveedor')
export class ProveedorController {
    constructor (
        private readonly proveedorServiceRepo: ProveedorService) {}

        //metodo para crear un producto
        @Post()
        create(@Body() proveedordto: CreateProveedorDto) {
            return this.proveedorServiceRepo.create(proveedordto)
        }

        //metodo para mostrar los productos
        @Get()
        findAll() {
            return this.proveedorServiceRepo.findAll();
        }

        //metodo para mostrar un producto especifico
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: string) {
                return this.proveedorServiceRepo.findOne(id);
            } 

        // Para eliminar   
        @Delete(':id')
        remove(@Param('id', ParseUUIDPipe) id: string) {
            return this.proveedorServiceRepo.remove(id);
        }

        // crear metodo patch, para actualizar 
        @Patch(':id')
        update(
            @Param('id', ParseUUIDPipe) id: string,
            @Body() updateClientDto: CreateProveedorDto,
        ){
        return this.proveedorServiceRepo.update(id, updateClientDto);
  }
}
