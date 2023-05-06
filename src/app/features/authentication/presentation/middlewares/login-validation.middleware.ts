import { NextFunction, Request, Response } from 'express';
import { ZodError, z } from 'zod';
import { HttpResponse } from '../../../../shared/presentation';

export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
    const scheme = z.object({
        email: z.string().email(),
        password: z.string().nonempty().max(100),
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
