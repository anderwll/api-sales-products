import { NextFunction, Request, Response } from 'express';
import { HttpResponse } from '../../../../shared/presentation';
import { UserRepository } from '../../infra/repositories/user.repository';

export const existUserValidator = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const userRepository = new UserRepository();

    const exist = await userRepository.existUserByEmail(email);

    if (exist) {
        const responseError: HttpResponse = {
            success: false,
            message: 'This email already exists.',
        };

        return res.status(400).json(responseError);
    }

    return next();
};
