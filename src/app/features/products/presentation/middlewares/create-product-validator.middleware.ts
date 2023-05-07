import { NextFunction, Request, Response } from 'express';
import { z, ZodError } from 'zod';
import { HttpResponse } from '../../../../shared/presentation';
import { Unit } from '../../../../shared/domain/enums';

export const createProductValidator = (req: Request, res: Response, next: NextFunction) => {
    const scheme = z.object({
        description: z.string().nonempty(),
        price: z.number(),
        unit: z.nativeEnum(Unit),
        amount: z.number(),
    });

    try {
        const data = scheme.parse(req.body);
        Object.assign(req.body, data);

        return next();
    } catch (error: any) {
        if (error instanceof ZodError) {
            const responseError: HttpResponse[] = error.issues.map((issue) => ({
                success: false,
                field: issue.path[0],
                message: issue.message,
            }));

            return res.status(400).json(responseError);
        }
        throw error;
    }
};
