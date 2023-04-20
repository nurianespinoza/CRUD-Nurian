import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComputerDto } from './dto/product.dto';
import { Computer } from './entities/products.entity';


@Injectable()
export class ComputerService{
    constructor (
        @InjectRepository(Computer)
        private readonly computerRepository: Repository<Computer>,
        ) {}

        //metodo para agregar producto 

        async create(computerdto: CreateComputerDto) {
            const computer = this.computerRepository.create(computerdto);
            await this.computerRepository.save(computer)

            return computer;
        }

        //Metodo para visualizar todos los productos 
        findAll() {
            return this.computerRepository.find();
        }

        //metodo para visualizar un producto especifico
        findOne(id: string) {
            return this.computerRepository.findOneBy({ id}); 
        }

        //remover un producto especifico
        async remove(id: string) {
            const product = await this.findOne(id);
            await this.computerRepository.remove(product);
            return 'producto eliminado sastifactoriamante';
        }

        //actualizar un producto especifico
        async update(id: string, cambios: CreateComputerDto) {
            const findComputer = await this.findOne(id); 
            const updatedComputer = await this.computerRepository.merge(
                findComputer,
                cambios,
            );

            return this.computerRepository.update(id, updatedComputer);
        }

       
}