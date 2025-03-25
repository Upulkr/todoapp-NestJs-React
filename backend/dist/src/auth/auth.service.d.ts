import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(username: string, password: string): Promise<{
        id: number;
        username: string;
        password: string;
    }>;
    login(username: string, password: string): Promise<{
        token: string;
    }>;
}
