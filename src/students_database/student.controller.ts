import { Body, Controller, Delete, Get, Param , Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Students } from './students.entity';
import { StudentsService } from './student.service';


@ApiTags('students')
@Controller('students')
export class studentsController {  
    constructor(private studentsService:StudentsService){}

  @Get()
    async getUser(){
      const Response = await this.studentsService.findAll()
      return Response
    }

  @Get(':id')
    async getUserById(@Param('id') id:string) {
      const Response = await this.studentsService.findById(id)
      return Response
    }

  @Post()
  async createUser(@Body() body:Students) {
    return await this.studentsService.createUser(body)
  }
  
  @Put(':id')
  async updateUser(@Param('id') id:string,@Body() body:Students){
    let data =  this.studentsService.updateUser(Number(id),body)
    return data
  } 

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
     return await this.studentsService.deleteUser(Number(id))
  }
}


