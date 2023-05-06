import { Request, Response } from 'express';
import { LoginUseCase } from '../../domain/usecases';
import { CustomError } from '../../../../shared/errors';
import { HttpResponse } from '../../../../shared/presentation';

export class AuthenticationController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const useCase = new LoginUseCase();
            const data = await useCase.execute({ email, password });

            const response: HttpResponse = {
                success: true,
                message: 'Login successful.',
                data: data,
            };

            return res.status(200).json(response);
        } catch (error: any) {
            console.log('eu eu');

            if (error instanceof CustomError) {
                const responseError: HttpResponse = {
                    success: false,
                    message: error.message,
                };

                return res.status(401).json(responseError);
            }
            throw error;
        }
    }
}
