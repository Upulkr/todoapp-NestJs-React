import {
  Controller,
  Req,
  Post,
  Get,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}
  @Post('create')
  create(@Req() req, @Body() body) {
    console.log('+++++++++++body++++++++++', body);
    return this.todoService.createTodo(req.user.userId, body.title);
  }

  @Get()
  getTodos(@Req() req) {
    return this.todoService.getTodos(req.user.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('completed') completed: boolean) {
    return this.todoService.updateTodo(Number(id), completed);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.deleteTodo(Number(id));
  }
}
