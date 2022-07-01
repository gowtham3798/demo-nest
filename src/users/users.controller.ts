import { Body, Controller, Delete, Get, Param , Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Users } from './entity/user.entity';
import { UsersService } from './users.service';
import { Students } from 'src/students_database/students.entity';


@ApiTags('class')
@Controller('class')
export class UsersController {  
    constructor(private usersService:UsersService){}

  @Get()
    async getUser(){
      const Response = await this.usersService.findAll()
      return Response
    }

  @Get(':id')
    async getUserById(@Param('id') id:string) {
      const Response = await this.usersService.findById(id)
      return Response
    }

  @Post()
  async createUser(@Body() body:Users) {
    return await this.usersService.createUser(body)
  }
  
  @Put(':id')
  async updateUser(@Param('id') id:string,@Body() body:Users){
    let data =  this.usersService.updateUser(Number(id),body)
    return data
  } 

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
     return await this.usersService.deleteUser(Number(id))
  }
}


