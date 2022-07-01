import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/createSubject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentSubject } from './stu_subj.entity';

@Injectable()
export class SubjectsService {
    // private users : Users[] = [{id:0,name:'Raj'},{id:1,name:'Arjun'},{id:2,name:'Deva'},{id:3,name:'Vishwa'},{id:4,name:'Vyass'}]
      constructor(
    @InjectRepository(StudentSubject)
    private subjectRepository: Repository<StudentSubject>
  ) {}


    findAll() : Promise<StudentSubject[]>{
        return this.subjectRepository.find({relations:{students:true,subject:true}})
    }

    findById(id:string):Promise<StudentSubject> {
         return this.subjectRepository.findOne({where: {id: parseInt(id)},relations:{students:true,subject:true}})
    }

    createUser(user : CreateSubjectDto ): Promise<StudentSubject> {
        return this.subjectRepository.save(user)
    }

    async updateUser(id:number,user : StudentSubject) {
       await this.subjectRepository.update(id,user)
    }

    async deleteUser(id:number):Promise<any>{
      await this.subjectRepository.delete(id)
    }
}
