import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn, OneToOne, ManyToMany,OneToMany } from 'typeorm';
import { Users } from 'src/users/entity/user.entity';
import { StudentSubject } from 'src/student_subject_database/stu_subj.entity';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  student: string;
  
  @ManyToOne(() =>Users,section => section.student )
  @JoinColumn({name:'class'})
  section: Promise<Users>;

  @OneToMany(() => StudentSubject,Stdsubj => Stdsubj.students)
  stdsubj : Promise<StudentSubject[]>
}