import { Module } from '@nestjs/common';
import { Users } from './entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports : [TypeOrmModule.forFeature([Users])],
    controllers : [UsersController],
    providers: [UsersService],
    // exports: [TypeOrmModule.forFeature([Users])]
})
export class UsersModule {}
