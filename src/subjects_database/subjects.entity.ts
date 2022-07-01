import { Entity, Column, PrimaryGeneratedColumn,ManyToMany,OneToMany } from 'typeorm';
import { StudentSubject } from 'src/student_subject_database/stu_subj.entity';

@Entity()
export class Subjects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  subject: string;

  @OneToMany(() => StudentSubject,Stdsubj => Stdsubj.subject)
  stdsubj : Promise<StudentSubject[]>
}