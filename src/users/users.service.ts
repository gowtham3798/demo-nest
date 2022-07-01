import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { Users } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
      constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>
  ) {}


    findAll() : Promise<Users[]>{
        return this.userRepository.find({relations:{student:true}})
    }

    findById(id:string):Promise<Users> {
         return this.userRepository.findOne({where: {id: parseInt(id)},relations:{student:true}})
    }

    createUser(user : CreateUserDto): Promise<Users> {
        return this.userRepository.save(user)
    }

    async updateUser(id:number,user : Users) {
       await this.userRepository.update(id,user)
    }

    async deleteUser(id:number):Promise<any>{
      await this.userRepository.delete(id)
    }
}
