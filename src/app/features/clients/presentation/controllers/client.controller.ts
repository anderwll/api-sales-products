import { Request, Response } from 'express';
import { CustomError } from '../../../../shared/errors';
import { HttpResponse } from '../../../../shared/presentation';
import { CreateClientUseCase } from '../../domain/usecase/create-client.usecase';

export class ClientController {
    async createClient(req: Request, res: Response) {
        const { fantasy, cpfCnpj, phone, address, email } = req.body;
        try {
            const useCase = new CreateClientUseCase();
            const client = await useCase.execute({ fantasy, cpfCnpj, phone, address, email });

            const response: HttpResponse = {
                success: true,
                message: 'Client created successfully.',
                data: client,
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
