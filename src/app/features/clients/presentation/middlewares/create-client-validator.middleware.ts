import { NextFunction, Request, Response } from 'express';
import { z, ZodError } from 'zod';
import { cpf as cpfValidator, cnpj as cnpjValidator } from 'cpf-cnpj-validator';
import { HttpResponse } from '../../../../shared/presentation';

export const createClientValidator = (req: Request, res: Response, next: NextFunction) => {
    const scheme = z.object({
        fantasy: z.string().nonempty(),
        address: z.string().nonempty().max(200),
        email: z.string().email(),
        phone: z.string().transform((value, ctx) => {
            const phoneClean = value.replace(/[^a-zA-Z0-9]/g, '');

            if (phoneClean.length !== 11) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Phone invalid.',
                });

                return z.NEVER;
            }

            return phoneClean;
        }),
        cpfCnpj: z.string().transform((value, ctx) => {
            const cpfCnpjClean = value.replace(/[^a-zA-Z0-9]/g, '');

            if (cpfCnpjClean.length <= 11) {
                if (!cpfValidator.isValid(value)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'CPF/CNPJ invalid.',
                    });

                    return z.NEVER;
                }

                return cpfCnpjClean;
            }

            if (!cnpjValidator.isValid(value)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'CPF/CNPJ invalid.',
                });

                return z.NEVER;
            }

            return cpfCnpjClean;
        }),
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
