import { Request, Response } from 'express';
import { CustomError } from '../../../../shared/errors';
import { HttpResponse } from '../../../../shared/presentation';
import { CreateProductUseCase } from '../../domain/usecase';

export class ProductController {
    async createProduct(req: Request, res: Response) {
        const { description, price, unit, amount } = req.body;

        try {
            const useCase = new CreateProductUseCase();
            const product = await useCase.execute({ description, price, unit, amount });

            const response: HttpResponse = {
                success: true,
                message: 'Product created successfully.',
                data: product,
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
