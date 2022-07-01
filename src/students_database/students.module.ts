import { Module } from "@nestjs/common";
import { studentsController } from "./student.controller";
import { StudentsService } from "./student.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from "./students.entity";

@Module({
    imports : [TypeOrmModule.forFeature([Students])],
    controllers : [studentsController],
    providers : [StudentsService]
    
})

export class StudentsModule{}

