import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}
  async createTodo(userId: number, title: string) {
    return this.prisma.todo.create({
      data: { title, userId },
    });
  }
  async getTodos(userId: number) {
    return this.prisma.todo.findMany({
      where: { userId },
    });
  }
  async updateTodo(id: number, completed: boolean) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    if (!todo) {
      return { error: 'Todo not found' };
    }
    return this.prisma.todo.update({ where: { id }, data: { completed } });
  }
  async deleteTodo(id: number) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    if (!todo) {
      return { error: 'Todo not found' };
    }
    return this.prisma.todo.delete({ where: { id } });
  }
}
