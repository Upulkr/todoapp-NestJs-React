import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(username: string, password: string): Promise<{
        id: number;
        username: string;
        password: string;
    }>;
    login(username: string, password: string): Promise<{
        token: string;
    }>;
}
