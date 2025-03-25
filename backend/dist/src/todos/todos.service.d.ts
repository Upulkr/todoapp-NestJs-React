import { PrismaService } from 'prisma/prisma.service';
export declare class TodosService {
    private prisma;
    constructor(prisma: PrismaService);
    createTodo(userId: number, title: string): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }>;
    getTodos(userId: number): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }[]>;
    updateTodo(id: number, completed: boolean): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    } | {
        error: string;
    }>;
    deleteTodo(id: number): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    } | {
        error: string;
    }>;
}
