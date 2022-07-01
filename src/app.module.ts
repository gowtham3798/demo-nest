import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entity/user.entity';
import { Students } from './students_database/students.entity';
import { Subjects } from './subjects_database/subjects.entity';
import { StudentSubject } from './student_subject_database/stu_subj.entity';
import { StudentsModule } from './students_database/students.module';
import { SubjectModule } from './student_subject_database/stu_subj.module';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [UsersModule,StudentsModule,SubjectModule,ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRoot(
      { type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 25060,
      username: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      entities: [Users,Students,Subjects,StudentSubject],
      synchronize: true,
    }
    ),StudentsModule,UsersModule,SubjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
