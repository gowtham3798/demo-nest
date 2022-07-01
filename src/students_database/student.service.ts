import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/createstudent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from './students.entity';

@Injectable()
export class StudentsService {
    // private users : Users[] = [{id:0,name:'Raj'},{id:1,name:'Arjun'},{id:2,name:'Deva'},{id:3,name:'Vishwa'},{id:4,name:'Vyass'}]
      constructor(
    @InjectRepository(Students)
    private studentRepository: Repository<Students>
  ) {}


    findAll() : Promise<Students[]>{
        return this.studentRepository.find({relations:{section:true}})
    }

    findById(id:string):Promise<Students> {
         return this.studentRepository.findOne({where: {id: parseInt(id)},relations:{section:true}})
    }

    createUser(user : CreateStudentDto ): Promise<Students> {
        return this.studentRepository.save(user)
    }

    async updateUser(id:number,user : Students) {
       await this.studentRepository.update(id,user)
    }

    async deleteUser(id:number):Promise<any>{
      await this.studentRepository.delete(id)
    }
}
