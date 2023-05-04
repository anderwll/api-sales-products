import { Request, Response } from 'express';
import { UserRepository } from '../../infra/repositories/user.repository';
import { HttpResponse } from '../../../../shared/presentation';

export class UserController {
    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        try {
            const userRepository = new UserRepository();

            const user = await userRepository.saveUser({ name, email, password });

            const response: HttpResponse = {
                success: true,
                message: 'User created successfully.',
                data: user,
            };

            return res.status(200).json(response);
        } catch (error: any) {
            const responseError: HttpResponse = {
                success: true,
                message: error.message,
            };

            throw responseError;
        }
    }
}