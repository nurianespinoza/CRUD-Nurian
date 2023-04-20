import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProveedorDto } from './dto/product.dto';
import { Product } from './entities/products.entity';


@Injectable()
export class ProveedorService{
    constructor (
        @InjectRepository(Product)
        private readonly proveedorRepository: Repository<Product>,
        ) {}

        //metodo para agregar producto 

        async create(proveedordto: CreateProveedorDto) {
            const proveedor = this.proveedorRepository.create(proveedordto);
            await this.proveedorRepository.save(proveedor)

            return proveedor;
        }

        //Metodo para visualizar todos los productos 
        findAll() {
            return this.proveedorRepository.find();
        }

        //metodo para visualizar un producto especifico
        findOne(id: string) {
            return this.proveedorRepository.findOneBy({id}); 
        }

        //remover un producto especifico
        async remove(id: string) {
            const proveedor = await this.findOne(id);
            await this.proveedorRepository.remove(proveedor);
            return 'proveedor eliminado sastifactoriamante';
        }

        //actualizar un producto especifico
        async update(id: string, cambios: CreateProveedorDto) {
            const findProveedor = await this.findOne(id); 
            const updatedProveedor = await this.proveedorRepository.merge(
                findProveedor,
                cambios,
            );

            return this.proveedorRepository.update(id, updatedProveedor);
        }

       
}