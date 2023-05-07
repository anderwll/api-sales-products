import { Request, Response } from 'express';
import { CustomError } from '../../../../shared/errors';
import { HttpResponse } from '../../../../shared/presentation';
import { CreateOrderUseCase } from '../../domain/usecase';

export class OrderController {
    async createOrder(req: Request, res: Response) {
        const { clientId, representativeId, productId, amount, discount } = req.body;

        try {
            const useCase = new CreateOrderUseCase();

            const order = await useCase.execute({
                clientId,
                representativeId,
                productId,
                amount,
                discount,
            });

            const response: HttpResponse = {
                success: true,
                message: 'New order created successfully.',
                data: order,
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
