"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let AuthMiddleware = class AuthMiddleware {
    use(req, res, next) {
        const authHeader = req.headers.authorization;
        console.log('Authorization Header:', authHeader);
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }
        const token = authHeader.split(' ')[1];
        console.log('Extracted Token:', token);
        if (!token) {
            return res.status(401).json({ message: 'Token missing' });
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res
                .status(500)
                .json({ message: 'Internal server error: JWT secret missing' });
        }
        try {
            const decoded = jwt.verify(token, secret);
            console.log('Decoded Token:', decoded);
            req['user'] = decoded;
            next();
        }
        catch (error) {
            console.error('JWT verification error:', error);
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map