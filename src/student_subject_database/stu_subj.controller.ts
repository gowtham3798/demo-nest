import { Body, Controller, Delete, Get, Param , Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StudentSubject } from './stu_subj.entity';
import { SubjectsService } from './stu_subj.service';


@ApiTags('subject')
@Controller('subject')
export class SubjectsController {  
    constructor(private subjectsService:SubjectsService){}

  @Get()
    async getUser(){
      const Response = await this.subjectsService.findAll()
      return Response
    }

  @Get(':id')
    async getUserById(@Param('id') id:string) {
      const Response = await this.subjectsService.findById(id)
      return Response
    }

  @Post()
  async createUser(@Body() body:StudentSubject) {
    return await this.subjectsService.createUser(body)
  }
  
  @Put(':id')
  async updateUser(@Param('id') id:string,@Body() body:StudentSubject){
    let data =  this.subjectsService.updateUser(Number(id),body)
    return data
  } 

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
     return await this.subjectsService.deleteUser(Number(id))
  }
}


