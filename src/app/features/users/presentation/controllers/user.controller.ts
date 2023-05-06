import { Request, Response } from 'express';
import { UserRepository } from '../../infra/repositories/user.repository';
import { HttpResponse } from '../../../../shared/presentation';
import { CreateUserUseCase } from '../../domain/usecase/create-user-usecase';
import { CustomError } from '../../../../shared/errors';

export class UserController {
    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        try {
            const useCase = new CreateUserUseCase();
            const user = await useCase.execute({ name, email, password });

            const response: HttpResponse = {
                success: true,
                message: 'User created successfully.',
                data: user,
            };

            return res.status(200).json(response);
        } catch (error: any) {
            if (error instanceof CustomError) {
                const responseError: HttpResponse = {
                    success: false,
                    message: error.message,
                };

                return res.status(400).json(responseError);
            }
            throw error;
        }
    }
}
