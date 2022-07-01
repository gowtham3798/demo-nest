import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Students } from "src/students_database/students.entity";
import { Subjects } from "src/subjects_database/subjects.entity";


@Entity()
export class StudentSubject{
    @PrimaryGeneratedColumn()
    id:number
     
    
    @ManyToOne(() =>Students,students => students.stdsubj)
    @JoinColumn()
    students : Promise<Students>

    @ManyToOne(() => Subjects,subject => subject.stdsubj)
    @JoinColumn()
    subject : Promise<Subjects>
}