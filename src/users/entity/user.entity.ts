import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Students } from 'src/students_database/students.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ length: 500 })
  class_sec : string;

  @OneToMany(() => Students,student => student.section)
  @JoinColumn({name:'student'})
  student:Promise<Students[]>
}