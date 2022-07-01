import { Module } from "@nestjs/common";
import { SubjectsController } from "./stu_subj.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentSubject } from "./stu_subj.entity";
import { SubjectsService } from "./stu_subj.service";
@Module({
    imports : [TypeOrmModule.forFeature([StudentSubject])],
    controllers : [SubjectsController],
    providers : [SubjectsService]
    
})

export class SubjectModule{}

