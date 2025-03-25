import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    create(req: any, body: any): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }>;
    getTodos(req: any): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }[]>;
    update(id: string, completed: boolean): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    } | {
        error: string;
    }>;
    delete(id: string): Promise<{
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    } | {
        error: string;
    }>;
}
